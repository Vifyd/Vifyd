export const theme = {
  colors: {
    primary: '#1D4ED8',
    secondary: '#6B7280',
    white: '#ffffff',
    black: '#000000',
    gray100: '#F3F4F6',
    gray900: '#111827',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    full: '9999px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
  },
} as const;

export type Theme = typeof theme;
