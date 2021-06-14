import styles from './Navbar.module.scss'
import Link from 'next/link'
import { Container, Image, Nav, NavbarBrand, NavLink } from 'react-bootstrap'
import EuroIcon from '@material-ui/icons/Euro';
import PublicIcon from '@material-ui/icons/Public';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import StoreIcon from '@material-ui/icons/Store';
import { useRouter } from 'next/router'

const navbar = () => {
    const router = useRouter()

    return (
        <div className={styles.navbar}>
            <Container fluid>
                <Nav className={styles.navbar_wrapper}>
                    <NavbarBrand>
                        {/* <Image src='/logo.png' width={50} height={50} /> */}
                    </NavbarBrand>
                    <div className={`d-flex align-items-center justify-content-center`}>
                        <Link href="/" passHref>
                            <NavLink className={`${styles.navbar_link} ${router.pathname === '/' && styles.active_link}`}><EuroIcon />Currencies</NavLink>
                        </Link>
                        <Link href="/" passHref>
                            <NavLink className={styles.navbar_link}><PublicIcon /> Global</NavLink>
                        </Link>
                        <Link href="/" passHref>
                            <NavLink className={styles.navbar_link}><TrendingUpIcon /> Exchanges</NavLink>
                        </Link>
                        <Link href="/" passHref>
                            <NavLink className={styles.navbar_link}><StoreIcon /> Markets</NavLink>
                        </Link>
                    </div>
                </Nav>
            </Container>
        </div>
    )
}

export default navbar