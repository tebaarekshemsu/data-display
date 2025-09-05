import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, FileText, FileSpreadsheet, File } from 'lucide-react';
import { ExportConfig } from '../config/exportConfig';
import { Employee } from '../data/mockData';
import { exportToCsv, exportToExcel, exportToPdf, exportToQuickBooks } from '../utils/exportUtils';

interface ExportPanelProps {
  exportConfigs: ExportConfig[];
  data: Employee[];
  className?: string;
}

const ExportPanel: React.FC<ExportPanelProps> = ({
  exportConfigs,
  data,
  className = '',
}) => {
  const { t } = useTranslation();

  const getIcon = (format: string, customFormat?: string) => {
    if (customFormat === 'quickbooks') return <File className="w-4 h-4" />;
    if (customFormat === 'fmcsa') return <FileText className="w-4 h-4" />;
    
    switch (format) {
      case 'csv':
        return <FileText className="w-4 h-4" />;
      case 'excel':
        return <FileSpreadsheet className="w-4 h-4" />;
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      default:
        return <Download className="w-4 h-4" />;
    }
  };

  const handleExport = (config: ExportConfig) => {
    try {
      switch (config.format) {
        case 'csv':
          exportToCsv(data);
          break;
        case 'excel':
          exportToExcel(data);
          break;
        case 'pdf':
          exportToPdf(data, 'data.pdf', config.customFormat);
          break;
        case 'json':
          if (config.customFormat === 'quickbooks') {
            exportToQuickBooks(data);
          }
          break;
      }
      
      // Show success message (you could implement a toast notification here)
      console.log(t('message.exportSuccess'));
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 ${className}`}>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Download className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">{t('export.title')}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {exportConfigs.map((config) => (
            <button
              key={config.key}
              onClick={() => handleExport(config)}
              className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {getIcon(config.format, config.customFormat)}
              <span className="text-sm font-medium">{t(config.labelKey)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExportPanel;