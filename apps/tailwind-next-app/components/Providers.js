"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) {
    return null;
  }

  return(
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
