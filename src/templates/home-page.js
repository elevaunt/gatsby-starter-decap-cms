import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import renderSection from "../configs/sectionsMap.config";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import FullWidthImage from "../components/FullWidthImage";

export const HomePageTemplate = ({
  seoTitle,
  sections
}) => {
  // const heroImage = getImage(image) || image;
  console.log(sections);

  return (
    <div>
      <h1>{seoTitle}</h1>
      {sections.map((section, key) => renderSection(section, key))}
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
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
          type
          theme
          textAlign
          mainImage {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            position
            alt
          }
          tagline {
            color
            size
            text
            type
          }
          subheading {
            color
            size
            text
            type
          }
          heading {
            color
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
          }
          content {
            type
            theme
            mainImage {
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
              position
              alt
            }
            tagline {
              color
              size
              text
              type
            }
            subheading {
              color
              size
              text
              type
            }
            heading {
              color
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
            }
          }
        }
      }
    }
  }
`;
