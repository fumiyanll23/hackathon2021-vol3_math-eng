import { AppProps } from 'next/dist/next-server/lib/router/router'
import { RecoilRoot } from 'recoil'

import { PhoneMain } from '@/components/layouts/PhoneMain'

import '../../public/style.css'
import 'ress'

// __________
//
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <PhoneMain>
        <Component {...pageProps} />
      </PhoneMain>
    </RecoilRoot>
  )
}

export default MyApp
