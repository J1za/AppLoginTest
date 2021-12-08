import Head from 'next/head';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import HomeTemplate from '../templates/Home/Home';
export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Main</title>
        <meta name="title" content="Owlab React Front End Test Task" />
      </Head>
      <HomeTemplate />
    </MainLayout>
  )
}
