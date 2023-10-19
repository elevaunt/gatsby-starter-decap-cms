import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import renderSection from "../configs/sectionsMap.config";

export const SiteMenusTemplate = ({
  seoTitle,
  sections
}) => {
  return (
    <main>
      {sections.map((section, key) => renderSection(section, key))}
    </main>
  );
};

SiteMenusTemplate.propTypes = {
  seoTitle: PropTypes.string,
  sections: PropTypes.object,
};

const SiteMenus = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SiteMenusTemplate {...frontmatter} />
    </Layout>
  );
};

SiteMenus.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default SiteMenus;

const pageQuery = graphql`
    query MainMenuQuery {
      file(name: {eq: "main-menu"}) {
        name
        children {
          ... on MarkdownRemark {
            frontmatter {
              menuItems {
                label
                url
                submenu {
                  label
                  url
                }
              }
            }
          }
        }
      }
    }
  `;