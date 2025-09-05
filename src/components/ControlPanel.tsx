import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Database, Globe } from 'lucide-react';
import { DataSourceType } from '../hooks/useDataSource';

interface ControlPanelProps {
  onBack: () => void;
  dataSource: DataSourceType;
  onDataSourceChange: (source: DataSourceType) => void;
  language: string;
  onLanguageChange: (language: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onBack,
  dataSource,
  onDataSourceChange,
  language,
  onLanguageChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">{t('nav.back')}</span>
        </button>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
          {/* Data Source Selector */}
          <div className="flex items-center space-x-3">
            <Database className="w-5 h-5 text-blue-600" />
            <label className="text-sm font-medium text-gray-700">{t('dataSource.title')}:</label>
            <select
              value={dataSource}
              onChange={(e) => onDataSourceChange(e.target.value as DataSourceType)}
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="mock">{t('dataSource.mock')}</option>
              <option value="api">{t('dataSource.api')}</option>
            </select>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-green-600" />
            <label className="text-sm font-medium text-gray-700">{t('language.title')}:</label>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="en">{t('language.english')}</option>
              <option value="am">{t('language.amharic')}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;