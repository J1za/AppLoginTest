import Head from 'next/head';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import NewsTemplate from '../templates/News/News';
export default function News() {
  
  return (
    <MainLayout>
      <Head>
        <title>News</title>
        <meta name="title" content="Owlab React Front End Test Task" />
      </Head>
      <NewsTemplate />
    </MainLayout>
  )
}
