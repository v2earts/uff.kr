import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import SEOHead from "../components/head"

export default function OgamRecruitPage({ data }) {
  const { ogamRecruitPage } = data

  return (
    <Layout>
      <SEOHead {...ogamRecruitPage} />
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{ogamRecruitPage.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: ogamRecruitPage.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query OgamRecruitPageQuery {
    ogamRecruitPage: contentfulPage(slug: { eq: "ogam_recruit" }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
