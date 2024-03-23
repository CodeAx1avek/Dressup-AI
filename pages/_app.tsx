import '@/styles/globals.css';
import { ClerkProvider, useSession } from "@clerk/nextjs";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as ga from '@/libs/ga';
import { useEffect } from 'react';
import AuthenticationPage from './AuthenticationPage';
import SignInPage from './SignIn'; // Import your sign-in page component
import SignUpPage from './SignUp'; // Import your sign-up page component

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

  return (
    <ClerkProvider
      frontendApi={process.env.pk_test_YWNjdXJhdGUtbW9yYXktNS5jbGVyay5hY2NvdW50cy5kZXYk}
    >
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </ClerkProvider>
  );
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Define an array of routes that should not trigger redirection
    const nonRedirectRoutes = ["/SignInPage", "/SignUpPage"];

    // Check if there's no active session and the current route is not exempt from redirection
    if (!session && !nonRedirectRoutes.includes(router.pathname)) {
      router.push("/AuthenticationPage"); // Redirect to the authentication page
    }
  }, [session, router]);

  return <>{children}</>;
}
