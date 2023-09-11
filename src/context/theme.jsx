'use client';

import { ThemeProvider } from 'next-themes';

export default function ThemeProviderContext({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}