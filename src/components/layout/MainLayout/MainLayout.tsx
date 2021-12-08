import Footer from '../common/Footer/Footer';
import Header from '../common/Header/Header';
import styles from './MainLayout.module.scss';
import { MainLayoutProps } from './MainLayout.props';
import Container from '@mui/material/Container';
const MainLandingLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className={styles.main}>
            <Header />
            <Container maxWidth="xl">
                <main className={styles.main__body}>
                    {children}
                </main>
            </Container>
            <Footer />
        </div>
    )
}

export default MainLandingLayout
