import Footer from 'components/footer/Footer'
import ModularComponents from 'components/contentful/ModularComponents'
import { getPagePropsBySlug } from 'graphql/queries'
import { get } from 'lodash'
import { useRouter } from 'next/router'

const WildcardPage = () => {
  const router = useRouter()
  const slug = ['', ...get(router, 'query.slug', [''])].join('/')

  return (
    <>
      <ModularComponents slug={slug} />
      <Footer />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const slug = ['', ...get(query, 'slug', [''])].join('/')
  const props = getPagePropsBySlug(slug)
  return props
}

export default WildcardPage
