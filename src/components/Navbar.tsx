import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import styles from './navbar.module.scss'
export const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    document.documentElement.style.colorScheme = theme
    return (
        <nav className={`${styles.nav} ${theme}`}>
            <h1> Logo </h1>
            <ul>
                <li>About</li>
                <li>Design</li>
                <li>Pricing</li>
                <li>Contact </li>
            </ul>
        </nav>
    )
}