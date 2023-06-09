import * as React from "react"
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Link, Flex } from "../components/ui"
import ChevronRight from "../components/chevron-right"
import * as styles from "../components/404.css"
import SEOHead from "../components/head"
import notFoundImage from "../static/images/not-found.png"

export default function NotFound() {
  return (
    <Layout>
      <Box paddingY={4}>
        <Container>
        <img src={notFoundImage} alt="404 Not Found" className={styles.image} />
          <Flex variant="column">
            <Heading variant="mega" className={styles.heading}>
            </Heading>
            <Heading as="h1"></Heading>
            <Flex variant="column" gap={0}>
              <Text variant="lead" className={styles.text}>
                </Text>
              <Link to="/" className={styles.link}>
                <span>홈으로 돌아가기</span>
                <ChevronRight className={styles.linkChevron} />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}
