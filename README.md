# Data Management Dashboard (Vite + React + TypeScript)

## Overview

This project is a modern data management dashboard built with React, TypeScript, and Vite. It features advanced data filtering, export capabilities, and internationalization (i18n) support for English and Amharic.

## Features

- **Data Table**: Displays tabular data with support for filtering and dynamic data sources.
- **Filtering**: Users can filter data by status, location, department, and date range using the Filter Panel.
- **Export**: Data can be exported in multiple formats (CSV, Excel, PDF, QuickBooks, FMCSA) via the Export Panel.
- **Internationalization (i18n)**: Supports English and Amharic languages using `react-i18next` and custom translation resources.
- **Data Source Switching**: Easily switch between mock data and API data sources.
- **Responsive UI**: Styled with Tailwind CSS for a clean, modern look.

## Project Structure

```
project/
├── src/
│   ├── App.tsx                # Main application component
│   ├── components/            # UI panels and table
│   │   ├── ControlPanel.tsx   # Data source & language controls
│   │   ├── FilterPanel.tsx    # Filtering UI
│   │   ├── ExportPanel.tsx    # Export options
│   │   └── DataTable.tsx      # Data table display
│   ├── config/                # Filter and export configuration
│   ├── data/                  # Mock data
│   ├── hooks/                 # Custom hooks (e.g., useDataSource)
│   ├── i18n/                  # i18n setup and translation resources
│   └── utils/                 # Utility functions (e.g., exportUtils)
├── index.html                 # App entry point
├── package.json               # Project metadata and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.ts             # Vite configuration
└── ...
```

## Key Files

- **App.tsx**: Main component, orchestrates panels and table, manages state for filters, data source, and language.
- **components/**: Contains modular UI components for control, filtering, export, and data display.
- **hooks/useDataSource.ts**: Custom hook to fetch data from mock or API sources.
- **config/**: Defines available filters and export formats.
- **i18n/index.ts**: Sets up i18next, provides translation resources for English and Amharic.
- **utils/exportUtils.ts**: Utility functions for exporting data.

## Internationalization

- Uses `react-i18next` for language switching.
- Translation resources are defined in `src/i18n/index.ts` for both English and Amharic.
- Language can be changed via the Control Panel.

## Getting Started

1. **Install dependencies**:
   ```powershell
   pnpm install
   ```
2. **Run the development server**:
   ```powershell
   pnpm dev
   ```
3. **Build for production**:
   ```powershell
   pnpm build
   ```
4. **Preview production build**:
   ```powershell
   pnpm preview
   ```

## Customization

- **Add new filters**: Update `src/config/filterConfig.ts`.
- **Add new export formats**: Update `src/config/exportConfig.ts` and `src/utils/exportUtils.ts`.
- **Add new languages**: Extend translation resources in `src/i18n/index.ts`.

