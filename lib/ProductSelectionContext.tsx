"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";

export interface SelectedProduct {
  slug: string;
  name: string;
  price: number;
}

const STORAGE_KEY = "aption-product-selection";
const CHANGE_EVENT = "aption-selection-changed";

const EMPTY_ITEMS: SelectedProduct[] = [];
let cachedRaw: string | null = null;
let cachedItems: SelectedProduct[] = EMPTY_ITEMS;

function getSnapshot(): SelectedProduct[] {
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedItems = raw ? JSON.parse(raw) : EMPTY_ITEMS;
    } catch {
      cachedItems = EMPTY_ITEMS;
    }
  }
  return cachedItems;
}

function getServerSnapshot(): SelectedProduct[] {
  return EMPTY_ITEMS;
}

function writeItems(items: SelectedProduct[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore — selection just won't persist
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

interface SelectionContextValue {
  items: SelectedProduct[];
  isSelected: (slug: string) => boolean;
  toggle: (item: SelectedProduct) => void;
  remove: (slug: string) => void;
  clear: () => void;
}

const SelectionContext = createContext<SelectionContextValue | null>(null);

export function ProductSelectionProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback((item: SelectedProduct) => {
    const current = getSnapshot();
    const next = current.some((i) => i.slug === item.slug)
      ? current.filter((i) => i.slug !== item.slug)
      : [...current, item];
    writeItems(next);
  }, []);

  const remove = useCallback((slug: string) => {
    writeItems(getSnapshot().filter((i) => i.slug !== slug));
  }, []);

  const clear = useCallback(() => writeItems([]), []);

  const isSelected = useCallback((slug: string) => items.some((i) => i.slug === slug), [items]);

  const value = useMemo(
    () => ({ items, isSelected, toggle, remove, clear }),
    [items, isSelected, toggle, remove, clear]
  );

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useProductSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) throw new Error("useProductSelection must be used within ProductSelectionProvider");
  return ctx;
}
