import { ChartDescriptor, ChartLoaded } from "./types";

const charts: ChartLoaded[] = [
  {
    ov: 'chart:0',
    chartId: '0',
    code: 'RDMP0001',
    name: '',
    lastNote: null,
    tags: ['RED MAPLE', 'ACER RUBRUM'],
  },
  {
    ov: 'chart:0',
    chartId: '1',
    code: 'G1A1',
    name: '',
    lastNote: new Date(),
    tags: ['APPLE'],
  },
];

export class ChartAPI {
  queryCharts(): ChartDescriptor[] {
    return charts.map((chart) => {
      return {
        ov: 'cd:0',
        chartId: chart.chartId,
        code: chart.code,
        name: chart.name,
        lastNote: chart.lastNote,
        tags: chart.tags,
      };
    });
  }

  async loadChart(chartId: string): Promise<ChartLoaded> {
    return new Promise((resolve, reject) => {
      // TODO: Simulated delay.
      setTimeout(() => {
        for (const chart of charts) {
          if (chart.chartId == chartId) {
            resolve(chart);
            return;
          }
        }
        reject(new Error('Chart not found.'));
      }, 1000);
    });
  }
}
