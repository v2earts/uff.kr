import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading, Button } from "../components/ui"
import SEOHead from "../components/head"

export default function contestRecruitPage({ data }) {
  const { contestRecruitPage } = data;

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <SEOHead {...contestRecruitPage} />
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">제26회 도시영화제 일반공모 출품 안내</Heading>
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
              __html: contestRecruitPage.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  );
}

export const query = graphql`
  query contestRecruitPageQuery {
    contestRecruitPage: contentfulPage(slug: { eq: "contest_recruit" }) {
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
