import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.back': 'Back',
      'nav.title': 'Data Management Dashboard',
      
      // Table Headers
      'table.id': 'ID',
      'table.name': 'Name',
      'table.email': 'Email',
      'table.status': 'Status',
      'table.location': 'Location',
      'table.joinDate': 'Join Date',
      'table.department': 'Department',
      'table.salary': 'Salary',
      
      // Filter Labels
      'filter.title': 'Filters',
      'filter.clear': 'Clear All',
      'filter.apply': 'Apply Filters',
      'filter.status.label': 'Status',
      'filter.status.active': 'Active',
      'filter.status.inactive': 'Inactive',
      'filter.status.all': 'All Status',
      'filter.location.label': 'Location',
      'filter.location.placeholder': 'Search location...',
      'filter.department.label': 'Department',
      'filter.department.all': 'All Departments',
      'filter.dateRange.label': 'Date Range',
      'filter.dateRange.last7days': 'Last 7 Days',
      'filter.dateRange.last30days': 'Last 30 Days',
      'filter.dateRange.lastQuarter': 'Last Quarter',
      'filter.dateRange.last5years': 'Last 5 Years',
      'filter.dateRange.all': 'All Time',
      
      // Export Labels
      'export.title': 'Export Data',
      'export.csv': 'Export CSV',
      'export.excel': 'Export Excel',
      'export.pdf': 'Export PDF',
      'export.quickbooks': 'Export QuickBooks',
      'export.fmcsa': 'Export FMCSA',
      
      // Data Source
      'dataSource.title': 'Data Source',
      'dataSource.mock': 'Mock Data',
      'dataSource.api': 'API Data',
      
      // Language
      'language.title': 'Language',
      'language.english': 'English',
      'language.amharic': 'አማርኛ',
      
      // Messages
      'message.noData': 'No data available',
      'message.loading': 'Loading...',
      'message.error': 'Error loading data',
      'message.exportSuccess': 'Export completed successfully',
    }
  },
  am: {
    translation: {
      // Navigation
      'nav.back': 'ተመለስ',
      'nav.title': 'የመረጃ አያያዝ ዳሽቦርድ',
      
      // Table Headers
      'table.id': 'መለያ',
      'table.name': 'ስም',
      'table.email': 'ኢሜይል',
      'table.status': 'ሁኔታ',
      'table.location': 'አካባቢ',
      'table.joinDate': 'የተቀላቀለበት ቀን',
      'table.department': 'ክፍል',
      'table.salary': 'ደመወዝ',
      
      // Filter Labels
      'filter.title': 'ማጣሪያዎች',
      'filter.clear': 'ሁሉንም አጽዳ',
      'filter.apply': 'ማጣሪያዎችን ተግብር',
      'filter.status.label': 'ሁኔታ',
      'filter.status.active': 'ንቁ',
      'filter.status.inactive': 'ያልተንቀሳቀሰ',
      'filter.status.all': 'ሁሉም ሁኔታዎች',
      'filter.location.label': 'አካባቢ',
      'filter.location.placeholder': 'አካባቢ ፈልግ...',
      'filter.department.label': 'ክፍል',
      'filter.department.all': 'ሁሉም ክፍሎች',
      'filter.dateRange.label': 'የቀን ክልል',
      'filter.dateRange.last7days': 'ባለፉት 7 ቀናት',
      'filter.dateRange.last30days': 'ባለፉት 30 ቀናት',
      'filter.dateRange.lastQuarter': 'ባለፈው ሩብ ዓመት',
      'filter.dateRange.last5years': 'ባለፉት 5 ዓመታት',
      'filter.dateRange.all': 'ሁሉም ጊዜ',
      
      // Export Labels
      'export.title': 'መረጃ ወደ ውጭ አውጣ',
      'export.csv': 'CSV አውጣ',
      'export.excel': 'Excel አውጣ',
      'export.pdf': 'PDF አውጣ',
      'export.quickbooks': 'QuickBooks አውጣ',
      'export.fmcsa': 'FMCSA አውጣ',
      
      // Data Source
      'dataSource.title': 'የመረጃ ምንጭ',
      'dataSource.mock': 'ሙከራ መረጃ',
      'dataSource.api': 'API መረጃ',
      
      // Language
      'language.title': 'ቋንቋ',
      'language.english': 'English',
      'language.amharic': 'አማርኛ',
      
      // Messages
      'message.noData': 'ምንም መረጃ የለም',
      'message.loading': 'እየጨመረ...',
      'message.error': 'መረጃ በመጫን ላይ ስህተት',
      'message.exportSuccess': 'ወደ ውጭ ማውጣት በተሳካ ሁኔታ ተጠናቋል',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;