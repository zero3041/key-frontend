import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
import ModalCart from '@/components/Modal/ModalCart'
import ModalWishlist from '@/components/Modal/ModalWishlist'
import ModalSearch from '@/components/Modal/ModalSearch'
import ModalQuickview from '@/components/Modal/ModalQuickview'
import ModalCompare from '@/components/Modal/ModalCompare'
import CountdownTimeType from '@/type/CountdownType'
import { countdownTime } from '@/store/countdownTime'

const serverTimeLeft: CountdownTimeType = countdownTime();

const ganhType = localFont({
  src: [
    {
      path: '../../public/fonts/ganh-type-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ganh-type-regularitalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ganh-type-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ganh-type-thinitalic.otf',
      weight: '100',
      style: 'italic',
    },
  ],
  variable: '--font-ganh-type',
})

export const metadata: Metadata = {
  title: 'Circle Store',
  description: 'Key Premium Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ganhType.variable}>
      <body>
        <GlobalProvider>
          {children}
          <ModalCart serverTimeLeft={serverTimeLeft} />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
        </GlobalProvider>
      </body>
    </html>
  )
}
