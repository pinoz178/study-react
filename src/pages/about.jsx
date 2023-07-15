import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function About(props) {
  const {foo, doubleCount, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd} = props

  console.log(text)
  return (
    <>
      <Head>
        <title>about pages</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={handleClick}>ボタン</button> 
      <button
        onClick={handleDisplay}
        >
          {isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange}  />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <Main title="About Page" page="about" />
      <Footer />
    </>
  )
}
