import { FC, FormEvent, ReactNode, useState } from "react"
import styled from "@emotion/styled"
import GlobalStyle from "../styles/GlobalStyle"
import { ThemeProvider } from "@emotion/react"
import theme from "../styles/theme.style"
import Header from "components/Common/Header"
import Footer from "components/Common/Footer"
import TopBtn from "components/Common/TopBtn"
import { Helmet } from "react-helmet"

export type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Template: FC<TemplateProps> = ({
                                       title,
                                       description,
                                       url,
                                       image,
                                       children
                                     }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const ToggleIsDarkMode = (e: FormEvent) => {
    e.preventDefault()
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header isDarkMode={isDarkMode} ToggleIsDarkMode={ToggleIsDarkMode} />
        {children}
        <TopBtn />
        <Footer />
      </ThemeProvider>
    </Container>
  )
}

export default Template