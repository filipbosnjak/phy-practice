import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from "@nextui-org/react";
import useDarkMode from 'use-dark-mode';
import CustomNavbar from './components/navbar/CustomNavbar'


function MyApp({ Component, pageProps }: AppProps) {

    const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {}, // optional
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {}, // optional
    },
  });

  const darkMode = useDarkMode(false);
  
  //This is what is common among all pages
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <CustomNavbar/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
