import { AppProps } from 'next/dist/next-server/lib/router/router'
import { RecoilRoot } from 'recoil'

// __________
//
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
