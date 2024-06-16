import ArticlePool from '../components/organisms/ArticlePool'
import { Helmet } from 'react-helmet'

export default function Home() {
  return <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Only text - Simple text bloging</title>
        <meta name="description" content="A simple open blog writer. Only supports text writing with basic writing features. Tell us everything!"/>
    </Helmet>
    <ArticlePool />
  </>
}
