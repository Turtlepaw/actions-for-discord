import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/old.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../components/theme';
import Head from 'next/head';

const baseURL = "https://discordactions.vercel.app";
export function urlFrom(path: string) {
  return `${baseURL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const customConfiguration = {
  tagline: "Actions that work on almost any bot",
  htmlSupportedTagline: "Actions that work<br/>on almost any bot",
  title: "Actions for Discord",
  description: "Actions that work on almost any bot",
  icon: {
    SVG: "icon.svg",
    PNG: "icon.png"
  },
  rawIcon: {
    SVG: "/icon_raw.svg",
    PNG: "/icon_raw.svg"
  },
  baseURL,
  urlFrom
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='poppins'>
      <ChakraProvider theme={theme}>
        <Head>
          <title>{customConfiguration.title}</title>
          <link rel="icon" href={customConfiguration.rawIcon.SVG} />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp
