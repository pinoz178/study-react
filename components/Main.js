import { Links } from './Links'
import styles from './Main.module.css'
import {Headline} from './Headline'

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