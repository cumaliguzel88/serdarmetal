export type ServiceKey =
  | 'aluminum'
  | 'copper'
  | 'steel'
  | 'stainless'
  | 'brass'
  | 'plant';

export const serviceEntries: { id: string; key: ServiceKey }[] = [
  { id: 'aluminum', key: 'aluminum' },
  { id: 'copper', key: 'copper' },
  { id: 'steel', key: 'steel' },
  { id: 'stainless', key: 'stainless' },
  { id: 'brass', key: 'brass' },
  { id: 'plant', key: 'plant' }
];
