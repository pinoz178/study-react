import Image from 'next/image'
import styles from './Links.module.css'

export function Links({items}) {
  return (
    <>
    <div className={styles.center}>
        <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority />
    </div>
    <div className={styles.grid}>
    {items.map(item =>{
        return (
            <a key={item.href} href={item.href} className={styles.card} target="_blank" rel="noopener noreferrer">
                <h2>{item.title} <span>-&gt;</span></h2>
                <p>{item.descripution}</p>
            </a>
        )
    })}
    </div></>
  )
}
