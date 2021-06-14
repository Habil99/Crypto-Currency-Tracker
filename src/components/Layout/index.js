import Head from 'next/head'
import styles from './Layout.module.scss'
import Navbar from '../Navbar'
import { Row, Col, Container } from 'react-bootstrap'

const Layout = ({ children, title = 'CryptoCurrency' }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.layout}>
                <Navbar />
                <Container fluid>
                    {children}
                </Container>
            </main>
        </div>
    )
}

export default Layout