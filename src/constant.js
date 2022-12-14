import { GridSettings } from 'light-react-grid';

export const gridSettings: GridSettings = {
  breakpoints: {
    sm: {
      columns: 4,
      gutterSize: 5,
      maxWidth: 600,
    },
    md: {
      columns: 8,
      gutterSize: 5,
      minWidth: 601,
      maxWidth: 900,
    },
    lg: {
      columns: 12,
      gutterSize: 10,
      minWidth: 901,
    },
  },
  gridHelperColumnColor: 'rgba(0, 0, 0, .05)',
  gridHelperMargins: {
    sm: '10%',
    md: '9%',
    lg: '8%',
  },
  prefixes: {
    grid: 'g',
    gridColumn: 'gc',
  },
};