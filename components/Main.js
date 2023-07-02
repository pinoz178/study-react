import { Links } from '@/components/Links'
import styles from '@/styles/Home.module.css'
import {Headline} from '@/components/Headline'

export function Main(props) {
    return (
      <>
        <main>
          <Headline title={props.title} page={props.page}>
            code={<code className={styles.code}>pages/{props.page}.js</code> }
          </Headline>
          <Links />
        </main>
      </>
    )
}