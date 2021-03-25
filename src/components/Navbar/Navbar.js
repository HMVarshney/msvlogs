import styles from './Navbar.module.css';

const Navbar = () => {
    return (  
        <nav className={styles['wrapper']}>
            <div>
                <div>LOGO</div>
                <div className={styles['nav-links-container']}>
                    <li className={styles['nav-links']}>Home</li>
                    <li className={styles['nav-links']}>Home</li>
                    <li className={styles['nav-links']}>Home</li>
                    <li className={styles['nav-links']}>Home</li>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;