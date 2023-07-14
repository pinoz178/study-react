import 'src/styles/globals.css'
import { useCounter } from 'src/components/books/useCounter'
import { useInputArray } from 'src/components/books/useInputArray'
import { useBgPurple } from 'src/components/books/useBgPurple'

export default function App({ Component, pageProps }) {
  const counter = useCounter()
  const inputArray = useInputArray()
  useBgPurple()
return <Component {...pageProps} {...counter} {...inputArray}/>
}
