export interface ExportConfig {
  key: string;
  labelKey: string;
  format: 'csv' | 'excel' | 'pdf' | 'json';
  customFormat?: 'quickbooks' | 'fmcsa';
}

export const exportConfigs: ExportConfig[] = [
  {
    key: 'csv',
    labelKey: 'export.csv',
    format: 'csv',
  },
  {
    key: 'excel',
    labelKey: 'export.excel',
    format: 'excel',
  },
  {
    key: 'pdf',
    labelKey: 'export.pdf',
    format: 'pdf',
  },
  {
    key: 'quickbooks',
    labelKey: 'export.quickbooks',
    format: 'json',
    customFormat: 'quickbooks',
  },
  {
    key: 'fmcsa',
    labelKey: 'export.fmcsa',
    format: 'pdf',
    customFormat: 'fmcsa',
  },
];