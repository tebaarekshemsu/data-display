import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { Employee } from '../data/mockData';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: any;
  }
}

export const exportToCsv = (data: Employee[], filename: string = 'data.csv') => {
  const headers = ['ID', 'Name', 'Email', 'Status', 'Location', 'Join Date', 'Department', 'Salary'];
  const csvContent = [
    headers.join(','),
    ...data.map(row => [
      row.id,
      `"${row.name}"`,
      row.email,
      row.status,
      `"${row.location}"`,
      row.joinDate.toDateString(),
      row.department,
      row.salary
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToExcel = (data: Employee[], filename: string = 'data.xlsx') => {
  const worksheet = XLSX.utils.json_to_sheet(data.map(row => ({
    ID: row.id,
    Name: row.name,
    Email: row.email,
    Status: row.status,
    Location: row.location,
    'Join Date': row.joinDate.toDateString(),
    Department: row.department,
    Salary: row.salary
  })));

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
  XLSX.writeFile(workbook, filename);
};

export const exportToPdf = (data: Employee[], filename: string = 'data.pdf', customFormat?: 'fmcsa') => {
  const doc = new jsPDF();

  if (customFormat === 'fmcsa') {
    // FMCSA specific formatting
    doc.setFontSize(16);
    doc.text('FMCSA Driver Report', 20, 20);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toDateString()}`, 20, 30);
    
    const fmcsaData = data.map(row => [
      row.id,
      row.name,
      row.status,
      row.location,
      row.joinDate.toDateString()
    ]);

    doc.autoTable({
      head: [['Driver ID', 'Driver Name', 'Status', 'Location', 'Start Date']],
      body: fmcsaData,
      startY: 40,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [41, 128, 185] }
    });
  } else {
    // Standard PDF format
    doc.setFontSize(16);
    doc.text('Employee Data Report', 20, 20);
    
    const tableData = data.map(row => [
      row.id,
      row.name,
      row.email,
      row.status,
      row.location,
      row.joinDate.toDateString(),
      row.department,
      `$${row.salary.toLocaleString()}`
    ]);

    doc.autoTable({
      head: [['ID', 'Name', 'Email', 'Status', 'Location', 'Join Date', 'Department', 'Salary']],
      body: tableData,
      startY: 30,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [25, 118, 210] }
    });
  }

  doc.save(filename);
};

export const exportToQuickBooks = (data: Employee[], filename: string = 'quickbooks_data.json') => {
  const quickbooksFormat = {
    CompanyInfo: {
      CompanyName: "Sample Company",
      ExportDate: new Date().toISOString(),
    },
    Employees: data.map(emp => ({
      Id: emp.id,
      Name: emp.name,
      Email: emp.email,
      Active: emp.status === 'Active',
      Address: {
        City: emp.location
      },
      HireDate: emp.joinDate.toISOString(),
      Department: emp.department,
      Salary: emp.salary
    }))
  };

  const blob = new Blob([JSON.stringify(quickbooksFormat, null, 2)], { 
    type: 'application/json' 
  });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};