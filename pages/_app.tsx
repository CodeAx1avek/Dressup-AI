// Import required modules and components
import '@/styles/globals.css';
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as ga from '@/libs/ga';
import { useEffect } from 'react';

// Define the App component
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Set up useEffect hook to handle route changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };

    // Subscribe to route change events
    router.events.on('routeChangeComplete', handleRouteChange);

    // Unsubscribe from route change events when component is unmounted
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Render the ClerkProvider component wrapping the Component and passing pageProps
  return (
    <ClerkProvider
      frontendApi={process.env.pk_test_YWNjdXJhdGUtbW9yYXktNS5jbGVyay5hY2NvdW50cy5kZXYk}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
