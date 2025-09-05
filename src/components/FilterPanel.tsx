import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Filter, X } from 'lucide-react';
import { FilterConfig, FilterOption } from '../config/filterConfig';

interface FilterPanelProps {
  filterConfigs: FilterConfig[];
  filters: Record<string, any>;
  onFilterChange: (key: string, value: any) => void;
  onClearFilters: () => void;
  className?: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filterConfigs,
  filters,
  onFilterChange,
  onClearFilters,
  className = '',
}) => {
  const { t } = useTranslation();

  const renderDropdownFilter = (config: FilterConfig) => (
    <div key={config.key as string} className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {t(config.labelKey)}
      </label>
      <div className="relative">
        <select
          value={filters[config.key as string] || 'all'}
          onChange={(e) => onFilterChange(config.key as string, e.target.value)}
          className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
        >
          {config.options?.map((option: FilterOption) => (
            <option key={option.value} value={option.value}>
              {t(option.label)}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );

  const renderTextFilter = (config: FilterConfig) => (
    <div key={config.key as string} className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {t(config.labelKey)}
      </label>
      <input
        type="text"
        value={filters[config.key as string] || ''}
        onChange={(e) => onFilterChange(config.key as string, e.target.value)}
        placeholder={config.placeholder ? t(config.placeholder) : ''}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );

  const renderDateRangeFilter = (config: FilterConfig) => (
    <div key={config.key as string} className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {t(config.labelKey)}
      </label>
      <div className="relative">
        <select
          value={filters[config.key as string] || 'all'}
          onChange={(e) => onFilterChange(config.key as string, e.target.value)}
          className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
        >
          {config.options?.map((option: FilterOption) => (
            <option key={option.value} value={option.value}>
              {t(option.label)}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );

  const renderFilter = (config: FilterConfig) => {
    switch (config.type) {
      case 'dropdown':
        return renderDropdownFilter(config);
      case 'text':
        return renderTextFilter(config);
      case 'dateRange':
        return renderDateRangeFilter(config);
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">{t('filter.title')}</h3>
          </div>
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
            <span>{t('filter.clear')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filterConfigs.map(renderFilter)}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;