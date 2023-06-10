import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading, Button } from "../components/ui"
import SEOHead from "../components/head"

export default function OgamRecruitPage({ data }) {
  const { ogamRecruitPage } = data;

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <SEOHead {...ogamRecruitPage} />
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{ogamRecruitPage.title}</Heading>
          <div style={{ display: 'flex', justifyContent: 'left' }}>
            <Button variant="btnGrad" onClick={() => handleDownload("https://docs.google.com/uc?export=download&id=1PE7a9sJRgcHYs9eucJ55E1uLAyeNM5Dp&confirm=t")}>
              모집 안내문
            </Button>
            <Button variant="btnGrad" onClick={() => handleDownload("https://docs.google.com/uc?export=download&id=1VUCmoS9m5oDrDv5oAxsZ8QtZEPvOIhU-&confirm=t")}>
              지원서
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
