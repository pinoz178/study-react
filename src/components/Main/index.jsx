import { Links } from '../Links'
import styles from './Main.module.css'
import {Headline} from '../Headline'
import { useCallback, useState } from 'react';

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
]

export function Main(props) {
  const [items, setItems] = useState(ITEMS)
  const handleReduse = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length -1)
    })
  },[])

  return (
    <>
    <main className={styles.main}>
      <Headline title={props.title} page={props.page} handleReduse={handleReduse}>
        {<code className={styles.code}>{items.length}</code> }
      </Headline>
      <Links items={items} />
    </main>
      </>
    )
}