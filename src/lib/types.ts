// ov - object version
// id - identification, unique (a uuid v4 value).
// rv - revision, unique (a uuid v4 value). Updated on each edit. Use as key on react component.

export type ChartRef = ChartRef1r0;
export type ChartLoaded = ChartLoaded1r0;

export interface ChartRef1r0 {
  ov: 'charts.chart.ref:1.0';
  id: string;
  rv: string;
  code: string;
  name: string;
  lastNote: null | Date;
  tags: string[];
}

export interface ChartLoaded1r0 {
  ov: 'charts.chart:1.0';
  id: string;
  rv: string;
  code: string;
  name: string;
  lastNote: null | Date;
  tags: string[];
}
