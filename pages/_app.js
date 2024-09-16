import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GA_MEASUREMENT_ID = 'G-Q08395HH6X'; // Replace with your actual Measurement ID

// Function to log page views
const logPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Log initial page load
    logPageView(window.location.pathname);

    // Track route changes
    const handleRouteChange = (url) => {
      logPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
