export interface Employee {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
  location: string;
  joinDate: Date;
  department: string;
  salary: number;
}

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    status: 'Active',
    location: 'New York',
    joinDate: new Date('2023-01-15'),
    department: 'Engineering',
    salary: 85000,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    status: 'Active',
    location: 'San Francisco',
    joinDate: new Date('2022-11-20'),
    department: 'Marketing',
    salary: 75000,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    status: 'Inactive',
    location: 'Chicago',
    joinDate: new Date('2021-05-10'),
    department: 'Sales',
    salary: 68000,
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    status: 'Active',
    location: 'Austin',
    joinDate: new Date('2023-03-12'),
    department: 'HR',
    salary: 72000,
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david.brown@company.com',
    status: 'Active',
    location: 'Seattle',
    joinDate: new Date('2020-09-08'),
    department: 'Engineering',
    salary: 92000,
  },
  {
    id: '6',
    name: 'Lisa Davis',
    email: 'lisa.davis@company.com',
    status: 'Inactive',
    location: 'Boston',
    joinDate: new Date('2019-12-03'),
    department: 'Finance',
    salary: 78000,
  },
  {
    id: '7',
    name: 'Tom Anderson',
    email: 'tom.anderson@company.com',
    status: 'Active',
    location: 'Denver',
    joinDate: new Date('2022-07-25'),
    department: 'Operations',
    salary: 65000,
  },
  {
    id: '8',
    name: 'Emma Garcia',
    email: 'emma.garcia@company.com',
    status: 'Active',
    location: 'Miami',
    joinDate: new Date('2023-06-18'),
    department: 'Marketing',
    salary: 71000,
  },
];

export const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];