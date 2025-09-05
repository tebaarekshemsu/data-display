import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { useTranslation } from 'react-i18next';
import { Employee } from '../data/mockData';
import { subDays, subMonths, subYears } from 'date-fns';

interface DataTableProps {
  data: Employee[];
  loading: boolean;
  filters: Record<string, any>;
}

const DataTable: React.FC<DataTableProps> = ({ data, loading, filters }) => {
  const { t } = useTranslation();

  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        accessorKey: 'id',
        header: t('table.id'),
        size: 80,
      },
      {
        accessorKey: 'name',
        header: t('table.name'),
        size: 150,
      },
      {
        accessorKey: 'email',
        header: t('table.email'),
        size: 200,
      },
      {
        accessorKey: 'status',
        header: t('table.status'),
        size: 120,
        Cell: ({ cell }) => (
          <span
            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
              cell.getValue<string>() === 'Active'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {cell.getValue<string>() === 'Active' ? t('filter.status.active') : t('filter.status.inactive')}
          </span>
        ),
      },
      {
        accessorKey: 'location',
        header: t('table.location'),
        size: 150,
      },
      {
        accessorKey: 'joinDate',
        header: t('table.joinDate'),
        size: 120,
        Cell: ({ cell }) => new Date(cell.getValue<Date>()).toLocaleDateString(),
      },
      {
        accessorKey: 'department',
        header: t('table.department'),
        size: 150,
      },
      {
        accessorKey: 'salary',
        header: t('table.salary'),
        size: 120,
        Cell: ({ cell }) => `$${cell.getValue<number>().toLocaleString()}`,
      },
    ],
    [t]
  );

  const filteredData = useMemo(() => {
    let filtered = [...data];

    // Apply status filter
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(item => item.status === filters.status);
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(item =>
        item.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply department filter
    if (filters.department && filters.department !== 'all') {
      filtered = filtered.filter(item => item.department === filters.department);
    }

    // Apply date range filter
    if (filters.dateRange && filters.dateRange !== 'all') {
      const now = new Date();
      let cutoffDate: Date;

      switch (filters.dateRange) {
        case 'last7days':
          cutoffDate = subDays(now, 7);
          break;
        case 'last30days':
          cutoffDate = subDays(now, 30);
          break;
        case 'lastQuarter':
          cutoffDate = subMonths(now, 3);
          break;
        case 'last5years':
          cutoffDate = subYears(now, 5);
          break;
        default:
          cutoffDate = new Date(0);
      }

      filtered = filtered.filter(item => new Date(item.joinDate) >= cutoffDate);
    }

    return filtered;
  }, [data, filters]);

  const table = useMaterialReactTable({
    columns,
    data: filteredData,
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
      sorting: [{ id: 'name', desc: false }],
    },
    enableColumnFilterModes: false,
    enableColumnFilters: false,
    enableGlobalFilter: false,
    enableFilters: false,
    muiTableContainerProps: {
      sx: {
        maxHeight: '600px',
      },
    },
    muiTableProps: {
      sx: {
        '& .MuiTableHead-root': {
          '& .MuiTableCell-root': {
            backgroundColor: '#f8fafc',
            borderBottom: '2px solid #e2e8f0',
            fontWeight: 600,
            color: '#374151',
          },
        },
        '& .MuiTableBody-root': {
          '& .MuiTableRow-root': {
            '&:hover': {
              backgroundColor: '#f1f5f9',
            },
          },
        },
      },
    },
    state: {
      isLoading: loading,
    },
  });

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <MaterialReactTable table={table} />
    </div>
  );
};

export default DataTable;