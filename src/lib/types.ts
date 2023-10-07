export type ChartDescriptor = ChartDescriptorV0;
export type ChartLoaded = ChartLoadedV0; // TODO: I used the terminology Loaded here since it representes a chart that's been loaded, but there was already a Chart component class. How could I differentiate between the two cases?

export interface ChartDescriptorV0 {
  ov: 'cd:0';
  chartId: string;
  code: string;
  name: string;
  lastNote: null | Date;
  tags: string[];
}

export interface ChartLoadedV0 {
  ov: 'chart:0';
  chartId: string;
  code: string;
  name: string;
  lastNote: null | Date;
  tags: string[];
}
