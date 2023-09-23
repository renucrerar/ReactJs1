import styles from "./Navbar.module.css"
import logo from "./assets/imagenes/logo.png"
export const Navbar = () => {
    return <nav className="Navbar ">
       
        <img src={logo} alt="" /> 
        <ul className={styles.title}>
            <li>productos</li>
            <li> contacto</li>
            <li> informacion</li>
        </ul>
    </nav>
}