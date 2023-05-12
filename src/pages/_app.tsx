import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation'
import { SessionProvider, useSession } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {

  // const { data: session, status} = useSession();

  return (
    <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
    </SessionProvider>
  )
}
