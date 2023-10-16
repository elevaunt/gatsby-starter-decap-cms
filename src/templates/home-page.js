import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import renderSection from "../configs/sectionsMap.config";

export const HomePageTemplate = ({
  seoTitle,
  sections
}) => {
  return (
    <main>
      {sections.map((section, key) => renderSection(section, key))}
    </main>
  );
};

HomePageTemplate.propTypes = {
  seoTitle: PropTypes.string,
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

export const pageQuery = graphql`
  query HomePageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seoTitle
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
