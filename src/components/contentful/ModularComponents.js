import { useQuery } from '@apollo/client'
import Error from 'next/error'
import { string } from 'prop-types'
import { get } from 'lodash'
import { PAGE_QUERY_BYSLUG } from 'graphql/queries'
import * as ContentfulComponents from './components'

const ModularComponents = ({ slug }) => {
  const { loading, error, data } = useQuery(PAGE_QUERY_BYSLUG, {
    variables: { slug },
  })

  if (loading) {
    return <div>LOADING</div>
  }

  if (error) {
    return <div>ERROR</div>
  }

  if (data.pageCollection.items.length === 0) {
    return <Error statusCode={404} />
  }

  const components = get(
    data,
    'pageCollection.items[0].componentsCollection.items',
    []
  )

  console.log(components)

  return components.map((component) => {
    const typeName = component.__typename // eslint-disable-line no-underscore-dangle
    if (typeName in ContentfulComponents) {
      const ModularComponent = ContentfulComponents[typeName]
      return (
        <ModularComponent
          key={`component-${slug}-${component.sys.id}`}
          {...component}
        />
      )
    }
    return null
  })
}

ModularComponents.propTypes = {
  slug: string.isRequired,
}

export default ModularComponents
