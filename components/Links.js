import Image from 'next/image'
import styles from './Links.module.css'
import { Tilt_Neon } from 'next/font/google'

const ITEMS = [
    {
    href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Docs",
    descripution:"Find in-depth information about Next.js features and&nbsp;API."
    },   
    {
    href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Learn",
    descripution:"Learn about Next.js in an interactive course with&nbsp;quizzes!"
    },   
    {
    href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Templates",
    descripution:"Discover and deploy boilerplate example Next.js&nbsp;projects."
    },   
    {
    href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Deploy",
    descripution:"Instantly deploy your Next.js site to a shareable URLwith&nbsp;Vercel."
    }
];

export function Links() {
  return (
    <><div className={styles.center}>
          <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority />
      </div><div className={styles.grid}>
            {ITEMS.map(item =>{
                return (
                    <a
                        key={item.href}
                        href={item.href}
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            {item.title} <span>-&gt;</span>
                        </h2>
                        <p>
                            {item.descripution}
                        </p>
                    </a>

                )
            })}
          </div></>
  )
}
