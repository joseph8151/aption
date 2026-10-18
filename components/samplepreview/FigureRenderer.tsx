import { SampleFigure } from "./sampleTypes";
import BarChartFigure from "../samplefigures/BarChartFigure";
import LineChartFigure from "../samplefigures/LineChartFigure";
import CubeNetFigure from "../samplefigures/CubeNetFigure";
import DataTableFigure from "../samplefigures/DataTableFigure";
import CodeBlockFigure from "../samplefigures/CodeBlockFigure";

export default function FigureRenderer({ figure }: { figure: SampleFigure }) {
  switch (figure.type) {
    case "bar":
      return (
        <BarChartFigure
          categories={figure.categories}
          series={figure.series}
          unit={figure.unit}
          maxValue={figure.maxValue}
        />
      );
    case "line":
      return (
        <LineChartFigure
          categories={figure.categories}
          series={figure.series}
          unit={figure.unit}
          maxValue={figure.maxValue}
          minValue={figure.minValue}
        />
      );
    case "cubenet":
      return <CubeNetFigure highlightPairs={figure.highlightPairs} labels={figure.labels} />;
    case "table":
      return <DataTableFigure headers={figure.headers} rows={figure.rows} caption={figure.caption} />;
    case "code":
      return <CodeBlockFigure code={figure.code} language={figure.language} />;
    default:
      return null;
  }
}
