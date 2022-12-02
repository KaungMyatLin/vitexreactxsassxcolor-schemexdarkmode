import {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import classes from './navbar.module.scss';

export const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    document.documentElement.style.colorScheme = theme

    let style:string = theme === 'light'? classes.light: classes.dark;
    return (
        <nav className={`${classes.nav} ${style}`}>
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