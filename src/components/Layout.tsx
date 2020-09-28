import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/index"
import styled from "../styled/index"
import Contact from "./Contact"
import Container from "./Container"
import Footer from "./Footer"
import Header from "./Header"
import Spacing from "./Spacing"

const BodyRoot = styled.div`
  display: flex;
  @media (max-width: 420px) {
    display: block;
  }
`

const BodyLeft = styled.div`
  width: 92%;
  @media (max-width: 420px) {
    width: 100%;
  }
`

const BodyRight = styled.div`
  @media (max-width: 420px) {
    text-align: left;
  }
`

/**
 * Layout components are for sections of your site that you want to share across multiple pages.
 * For example, Gatsby sites will commonly have a layout component with a shared header and footer.
 * Other common things to add to layouts are a sidebar and/or navigation menu.
 */
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Junhong Wang</title>
      </Helmet>
      <Container>
        <Header />
        <BodyRoot>
          <BodyLeft>{children}</BodyLeft>
          <Spacing flex={64} />
          <Spacing height={128} /> {/* for small screen */}
          <BodyRight>
            <Contact />
          </BodyRight>
        </BodyRoot>
        <Spacing height={128} />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}