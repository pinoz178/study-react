import { Links } from './components/Links'
import styles from './components/Main.module.css'
import {Headline} from './components/Headline'

export function Main(props) {
    return (
      <>
        <main className={styles.main}>
          <Headline title={props.title} page={props.page}>
            code={<code className={styles.code}>pages/{props.page}.js</code> }
          </Headline>
          <Links />
        </main>
      </>
    )
}