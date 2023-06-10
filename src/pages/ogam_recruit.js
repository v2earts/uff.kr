import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading, Button } from "../components/ui"
import SEOHead from "../components/head"

export default function OgamRecruitPage({ data }) {
  const { ogamRecruitPage } = data

  return (
    <Layout>
      <SEOHead {...ogamRecruitPage} />
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{ogamRecruitPage.title}</Heading>
          <div style={{ display: 'flex', justifyContent: 'left' }}>
            <Button variant="btnGrad">
              <a href="https://docs.google.com/uc?export=download&id=1PE7a9sJRgcHYs9eucJ55E1uLAyeNM5Dp&confirm=t" style={{ textDecoration: 'none', color: 'inherit' }}>모집 안내문</a>
            </Button>
            <Button variant="btnGrad">
              <a href="https://docs.google.com/uc?export=download&id=1VUCmoS9m5oDrDv5oAxsZ8QtZEPvOIhU&confirm=t" style={{ textDecoration: 'none', color: 'inherit' }}>지원서</a>
            </Button>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: ogamRecruitPage.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  );
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
