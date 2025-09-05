import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ControlPanel from './components/ControlPanel';
import FilterPanel from './components/FilterPanel';
import ExportPanel from './components/ExportPanel';
import DataTable from './components/DataTable';
import { useDataSource, DataSourceType } from './hooks/useDataSource';
import { filterConfigs } from './config/filterConfig';
import { exportConfigs } from './config/exportConfig';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [dataSource, setDataSource] = useState<DataSourceType>('mock');
  const [filters, setFilters] = useState<Record<string, any>>({});
  const { data, loading, error } = useDataSource(dataSource);

  const handleBack = () => {
    console.log('Navigate back');
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    document.title = t('nav.title');
  }, [t]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('nav.title')}</h1>
          <p className="text-gray-600">Advanced data management with filtering and export capabilities</p>
        </div>

        {/* Control Panel */}
        <ControlPanel
          onBack={handleBack}
          dataSource={dataSource}
          onDataSourceChange={setDataSource}
          language={i18n.language}
          onLanguageChange={handleLanguageChange}
        />

        {/* Filter Panel */}
        <FilterPanel
          filterConfigs={filterConfigs}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />

        {/* Export Panel */}
        <ExportPanel
          exportConfigs={exportConfigs}
          data={data}
        />

        {/* Data Table */}
        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-800">{t('message.error')}: {error}</p>
          </div>
        ) : (
          <DataTable
            data={data}
            loading={loading}
            filters={filters}
          />
        )}

        {!loading && data.length === 0 && !error && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-600">{t('message.noData')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;