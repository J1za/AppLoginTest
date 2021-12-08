import Head from 'next/head';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import ProfileTemplate from '../templates/Profile/Profile';
export default function Profile() {
  return (
    <MainLayout>
      <Head>
        <title>Profile</title>
        <meta name="title" content="Owlab React Front End Test Task" />
      </Head>
      <ProfileTemplate />
    </MainLayout>
  )
}
