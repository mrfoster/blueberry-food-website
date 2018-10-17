import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

import Heading from '../components/heading'
import { FaTruck, FaUtensils } from 'react-icons/fa'

const Home = ({ data }) => {
  const cafePages = data.cafePages.pages.map(x => x.page)
  return (
    <Layout>
      <Header title={data.page.name} />

      <section>
        <h2>
          <FaUtensils /> Cafes
        </h2>
        <div>
          {cafePages.map(page => (
            <div className="card" key={page.slug}>
              <Link to={page.slug}>{page.name}</Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <nav>
          <ul>
            {cafePages.map(page => (
              <li key={page.slug}>
                <Link to={page.slug}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section>
        <h2>
          <FaTruck /> Catering
        </h2>
        <p>
          Vestibulum eu viverra massa. Pellentesque eget lectus id purus
          consequat blandit. Duis vestibulum non orci vel egestas. Nulla a
          aliquet neque. Sed ac tincidunt urna, nec pretium sem. Vestibulum sit
          amet tristique dui. Aliquam ullamcorper eget risus in sodales.
        </p>
      </section>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  {
    page: pagesJson(slug: { eq: "/" }) {
      name
    }
    cafePages: allPagesJson(filter: { template: { eq: "cafe" } }) {
      pages: edges {
        page: node {
          slug
          name
        }
      }
    }
  }
`
