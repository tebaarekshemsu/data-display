import { Employee } from '../data/mockData';

export type FilterType = 'dropdown' | 'text' | 'dateRange';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterConfig {
  key: keyof Employee | string;
  type: FilterType;
  labelKey: string;
  options?: FilterOption[];
  placeholder?: string;
}

export const filterConfigs: FilterConfig[] = [
  {
    key: 'status',
    type: 'dropdown',
    labelKey: 'filter.status.label',
    options: [
      { value: 'all', label: 'filter.status.all' },
      { value: 'Active', label: 'filter.status.active' },
      { value: 'Inactive', label: 'filter.status.inactive' },
    ],
  },
  {
    key: 'location',
    type: 'text',
    labelKey: 'filter.location.label',
    placeholder: 'filter.location.placeholder',
  },
  {
    key: 'department',
    type: 'dropdown',
    labelKey: 'filter.department.label',
    options: [
      { value: 'all', label: 'filter.department.all' },
      { value: 'Engineering', label: 'Engineering' },
      { value: 'Marketing', label: 'Marketing' },
      { value: 'Sales', label: 'Sales' },
      { value: 'HR', label: 'HR' },
      { value: 'Finance', label: 'Finance' },
      { value: 'Operations', label: 'Operations' },
    ],
  },
  {
    key: 'dateRange',
    type: 'dateRange',
    labelKey: 'filter.dateRange.label',
    options: [
      { value: 'all', label: 'filter.dateRange.all' },
      { value: 'last7days', label: 'filter.dateRange.last7days' },
      { value: 'last30days', label: 'filter.dateRange.last30days' },
      { value: 'lastQuarter', label: 'filter.dateRange.lastQuarter' },
      { value: 'last5years', label: 'filter.dateRange.last5years' },
    ],
  },
];