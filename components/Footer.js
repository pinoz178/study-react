import Image from 'next/image'
import styles from "./Footer.module.css";

export function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.center}>
                <Image
                    className={styles.footerimg}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority />
                <p>Thanks</p>
            </div>
        </footer>
    )
}