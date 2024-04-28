import { FC, FormEvent } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { css } from "@emotion/react"

interface HeaderProps {
  isDarkMode: boolean;
  ToggleIsDarkMode: (e: FormEvent) => void;
}

const HeaderWrapper = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.lightModeColors.background.gray};
`

const HeaderContents = styled.div`
    margin: auto;
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3vw;

    @media (max-width: 1200px) {
        width: 100%;
        margin: 0 20px;
    }
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 5vw;
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 3vw;
`

const HeaderIndexLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
`

const HeaderTitle = styled.h1`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};

    @media (max-width: 768px) {
        display: none;
    }
`

const HeaderMenus = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5vw;
`

const HeaderMenu = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.sizes.web.small};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    transition: all 0.1s linear;

    &:hover {
        color: ${({ theme }) => theme.lightModeColors.font.black};
    }
`

const HeaderSearchWrapper = styled.div`
    padding: 0 11px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: ${({ theme }) => theme.lightModeColors.background.body};
`

const HeaderSearchInput = styled.input`
    height: 30px;
    background-color: ${({ theme }) => theme.lightModeColors.background.body};
    border: none;
    outline: none;
    width: 200px;

    @media (max-width: 650px) {
        display: none;
    }
`

const HeaderSearchLabel = styled.label`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ToggleMode = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.lightModeColors.background.white};
`

const staticImage = css`
    filter: invert(30%);
    transition: all 0.1s linear;

    &:hover {
        filter: invert(0%);
    }
`

const Header: FC<HeaderProps> = ({ isDarkMode, ToggleIsDarkMode }) => {

  const menus = {
    About: "/about/",
    Blog: "/blog/",
    Projects: "/projects/"
  }

  return (
    <HeaderWrapper>
      <HeaderContents>

        <HeaderLeft>
          <HeaderIndexLink to="/">
            <StaticImage src="../../images/logo.svg" alt="logo" width="20" />
            <HeaderTitle>Jeonggon</HeaderTitle>
          </HeaderIndexLink>

          <HeaderMenus>
            {Object.entries(menus).map(([menu, link]) => (
              <HeaderMenu key={menu} to={link}>{menu}</HeaderMenu>
            ))}
          </HeaderMenus>
        </HeaderLeft>

        <HeaderRight>
          <HeaderSearchWrapper>
            <HeaderSearchInput type="text">
            </HeaderSearchInput>
            <HeaderSearchLabel>
              <StaticImage src="../../images/search.svg" alt="search_label" width="14" css={staticImage} />
            </HeaderSearchLabel>
          </HeaderSearchWrapper>


          <Link to="https://github.com/JeonggonCho" target="_blank">
            <StaticImage src="../../images/github-mark.svg" alt="github" css={staticImage} width="36" />
          </Link>

          <ToggleMode onClick={ToggleIsDarkMode}>
            {isDarkMode ? <StaticImage src={"../../images/mode-dark.svg"} alt="mode" css={staticImage} /> :
              <StaticImage src={"../../images/mode-light.svg"} alt="mode" css={staticImage} />}
          </ToggleMode>
        </HeaderRight>

      </HeaderContents>
    </HeaderWrapper>
  )
}

export default Header