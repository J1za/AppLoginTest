import Head from 'next/head';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import LoginTemplate from '../templates/Login/Login';
export default function Login() {
  return (
    <MainLayout>
      <Head>
        <title>Login</title>
        <meta name="title" content="Owlab React Front End Test Task" />
      </Head>
      <LoginTemplate />
    </MainLayout>
  )
}
