import React from "react";
import PropTypes from "prop-types";
import { graphql, withPrefix } from "gatsby";

import Layout from "../components/Layout";
import renderSection from "../configs/sectionsMap.config";

export const HomePageTemplate = ({
  pageTitle,
  sections
}) => {
  return (
    <main>
      {sections.map((section, key) => renderSection(section, key))}
    </main>
  );
};

HomePageTemplate.propTypes = {
  pageTitle: PropTypes.string,
  sections: PropTypes.object,
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate {...frontmatter} />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const Head = ({ data, location }) => {
  const { pageTitle, settings } = data.markdownRemark.frontmatter;
  const ogImg = settings.shareImage.childImageSharp.fixed.src
  return (
    <>
      <html lang="en" />
      <title>{pageTitle} - The Porters Coaching</title>
      <meta name="description" content={settings.description} />

      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix("/")}img/apple-touch-icon.png`}
      /> */}
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}img/tpc-favicon-63x63.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}img/tpc-favicon-63x63.png`}
        sizes="16x16"
      />
      {/* <link
        rel="mask-icon"
        href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
        color="#ff4400"
      /> */}

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content={location.pathname} />
      <meta property="og:image" content={ogImg} />
    </>
  )
}

export const pageQuery = graphql`
  query HomePageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageTitle
        settings {
          description
          shareImage {
            absolutePath
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
        sections {
          id
          type
          theme
          contentStyles {
            split
            mt
            mb
            py
            px
            textAlign
          }
          mainImage {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            position
            alt
            radius
            mt
            mb
            shadow
          }
          tagline {
            color
            font
            size
            text
            type
          }
          subheading {
            color
            font
            size
            text
            type
          }
          heading {
            color
            font
            size
            text
            type
          }
          description {
            bullets {
              icon {
                color
                name
              }
              size
            }
            body
          }
          buttons {
            color
            size
            text
            type
            icon {
              name
              position
            }
            url
            action
          }
          content {
            id
            type
            secondaryContent
            theme
            contentStyles {
              containerTheme
              split
              mt
              mb
              py
              px
              textAlign
              forcePadding
              radius
              shadow
            }
            mainImage {
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
              position
              alt
              radius
              mt
              mb
              shadow
            }
            tagline {
              color
              font
              size
              text
              type
            }
            subheading {
              color
              font
              size
              text
              type
            }
            heading {
              color
              font
              size
              text
              type
            }
            description {
              bullets {
                icon {
                  color
                  name
                }
                size
              }
              body
            }
            buttons {
              color
              size
              text
              type
              icon {
                name
                position
              }
              url 
              action
            }
          }
        }
      }
    }
  }
`;
