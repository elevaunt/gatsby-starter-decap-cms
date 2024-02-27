import { graphql, withPrefix } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";
import renderSection from "../configs/sectionsMap.config";


export const MainTemplate = ({ sections }) => {
  return sections ? (
    <main>
      {sections.map((section, key) => renderSection(section, key))}
    </main>
  ) : null;
};

MainTemplate.propTypes = {
  pageTitle: PropTypes.string,
  sections: PropTypes.array,
};

const RenderPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const hideMenu = ["Privacy", "Terms & Conditions", "Disclaimer"].includes(frontmatter.title) || frontmatter.hideMenu;

  return (
    <Layout hideMenu={hideMenu}>
      <MainTemplate {...frontmatter} />
    </Layout>
  );
};

RenderPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default RenderPage;

export const Head = ({ data, location }) => {
  const { settings } = data.markdownRemark.frontmatter;
  const ogImg = settings.shareImage?.childImageSharp.fixed.src
  return (
    <>
      <html lang="en" />
      <title>{settings.seoTitle} - The Porters Coaching</title>
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
      <meta property="og:title" content={settings.seoTitle} />
      <meta property="og:url" content={location.pathname} />
      <meta property="og:image" content={ogImg} />
    </>
  )
}

export const pageQuery = graphql`
  query MainTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        hideMenu
        title
        settings {
          seoTitle
          pageUrl
          pageType
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
            maxWidth
          }
          mainImage {
            image {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  sizes
                }
              }
            }
            position
            aspectRatio
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
            fontSize
            body
          }
          buttons {
            color
            size
            text
            type
            mt
            mb
            ml
            mr
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
                  fluid {
                    src
                    srcSet
                    sizes
                  }
                }
              }
              position
              aspectRatio
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
              mt
              mb
              ml
              mr
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
