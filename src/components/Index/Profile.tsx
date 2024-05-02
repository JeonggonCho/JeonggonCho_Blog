import { FC } from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { graphql, Link, useStaticQuery } from "gatsby"

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ProfileImageTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const ProfileTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ProfileName = styled.h2`
    font-size: ${({ theme }) => theme.sizes.web.largest};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.largest};
    }
`

const ProfileRole = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.medium};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
    }
`

const ProfileIntroduction = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    line-height: 20px;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
    }
`

const ProfileAboutLink = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.lightModeColors.font.gray};
    width: fit-content;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
    }
`

const profile = css`
    width: 82px;
    height: 82px;
    border-radius: 12px;

    @media (max-width: 769px) {
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }
`

const profileCharacter = css`
    @media (max-width: 650px) {
        display: none;
    }
`

const Profile: FC = () => {

  const data = useStaticQuery(graphql`
      query getImages {
          profileImage: file(name: {eq: "profile-img"}) {
              childImageSharp {
                  gatsbyImageData(width: 82, height: 82)
              }
          }

          characterImage: file(name: {eq: "profile-character"}) {
              childImageSharp {
                  gatsbyImageData(width: 172, height: 204)
              }
          }
      }
  `)

  return (
    <ProfileWrapper>
      <ProfileInfo>
        <ProfileImageTitle>
          <GatsbyImage image={data.profileImage.childImageSharp.gatsbyImageData} alt="profile" css={profile} />
          <ProfileTitle>
            <ProfileName>조정곤</ProfileName>
            <ProfileRole>Frontend Developer</ProfileRole>
          </ProfileTitle>
        </ProfileImageTitle>

        <ProfileIntroduction>
          안녕하세요!<br />
          많은 사람들이 사용할 수 있는 <b>웹 서비스</b>를 만들기 위해 노력합니다.<br />
          다양한 프론트엔드 기술을 익히며 <br />
          Node.js 기반의 백엔드 지식도 함양하고 있습니다.
        </ProfileIntroduction>

        <ProfileAboutLink to="/about/">More about me →</ProfileAboutLink>
      </ProfileInfo>

      <GatsbyImage image={data.characterImage.childImageSharp.gatsbyImageData} alt="profile-character"
                   css={profileCharacter} />

    </ProfileWrapper>
  )
}

export default Profile