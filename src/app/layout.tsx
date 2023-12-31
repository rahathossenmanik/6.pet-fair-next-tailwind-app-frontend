'use client';
import { useStyles } from '@/constants/common/commonStyles';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { ColorScheme, MantineProvider } from '@mantine/core';
import ToastBody from './../components/ToastBody';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

const metadata: Metadata = {
  title: 'Pet Fair',
  description: 'Showcase, View and Love Pets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { classes } = useStyles();
  const [themeMode, setThemeMode] = useState<ColorScheme>('dark');
  return (
    <html lang='en'>
      <body>
        <MantineProvider
          theme={{ colorScheme: themeMode }}
          withGlobalStyles
          withNormalizeCSS>
          <Navbar setThemeMode={setThemeMode} />
          <div className={classes.mainBody}>{children}</div>
          <Footer />

          {/* Toast Body for All Toaster.  */}
          <ToastBody themeMode={themeMode} />
        </MantineProvider>
      </body>
    </html>
  );
}
