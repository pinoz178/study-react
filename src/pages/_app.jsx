import 'src/styles/globals.css'
import { useCounter } from 'src/components/books/useCounter'
import { useInputArray } from 'src/components/books/useInputArray'
import { useColor } from 'src/components/books/useBgColor'

export default function App({ Component, pageProps }) {
  const counter = useCounter()
  const inputArray = useInputArray()
  useColor()
return <Component {...pageProps} {...counter} {...inputArray}/>
}
