import Link from 'next/link'
import styles from  './Navbar.module.css'

export default function Navbar(){
    return(
        <navbar className={styles.navbarContainer}>
            <Link id="quizrat-logo" href="/">
                <img  src="quizrat-logo.png"/>
            </Link>
            <div className={styles.navbarSearchBar}>
                    <input type="search" placeholder='Animals, history, cars...'/>
                    <img src="magnifying-glass.png" onClick={()=>console.log("hello")}/>
            </div>
            
            <Link href="/quizes">
                <a>Quizes</a>
            </Link>
            <Link href="/categories">
                <a>Categories</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </navbar>
    )
}