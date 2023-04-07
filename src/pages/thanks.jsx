import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thanks - Dan Guenet</title>
        <meta
          name="description"
          content="Thanks for reaching out. You will hear back shortly."
        />
      </Head>
      <SimpleLayout
        title="Thanks for reaching out."
        intro="I will get back to you as soon as I can. I look forward to talking with you!"
      />
    </>
  )
}
