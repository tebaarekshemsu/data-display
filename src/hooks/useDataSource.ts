import { useState, useEffect } from 'react';
import { Employee, mockEmployees } from '../data/mockData';

export type DataSourceType = 'mock' | 'api';

export const useDataSource = (sourceType: DataSourceType) => {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (sourceType === 'mock') {
          // Simulate loading delay
          await new Promise(resolve => setTimeout(resolve, 500));
          setData(mockEmployees);
        } else {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          // For demo purposes, we'll use mock data but simulate API response
          const apiResponse = mockEmployees.map((emp, index) => ({
            ...emp,
            id: `api-${index + 1}`,
            name: `API ${emp.name}`,
          }));
          setData(apiResponse);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sourceType]);

  return { data, loading, error };
};