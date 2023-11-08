import { ChartRef, ChartLoaded } from "./types";

const charts: ChartLoaded[] = [
  {
    ov: 'charts.chart:1.0',
    id: '0',
    rv: '9',
    code: 'RDMP0001',
    name: 'Red Ted',
    lastNote: null,
    tags: ['RED MAPLE', 'ACER RUBRUM'],
  },
  {
    ov: 'charts.chart:1.0',
    id: '1',
    rv: '3',
    code: 'G1A1',
    name: 'Ol\' Appie',
    lastNote: new Date(),
    tags: ['APPLE'],
  },
];

export class ChartAPI {
  async queryCharts(): Promise<ChartRef[]> {
    return charts.map((chart) => {
      return {
        ov: 'charts.chart.ref:1.0',
        id: chart.id,
        rv: chart.rv,
        code: chart.code,
        name: chart.name,
        lastNote: chart.lastNote,
        tags: chart.tags,
      };
    });
  }

  async loadChart(id: string): Promise<ChartLoaded> {
    return new Promise((resolve, reject) => {
      // TODO: Remove this simulated delay.
      setTimeout(() => {
        for (const chart of charts) {
          if (chart.id == id) {
            resolve(chart);
            return;
          }
        }
        reject(new Error('Chart not found.'));
      }, 1000);
    });
  }
}
