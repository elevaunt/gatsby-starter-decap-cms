import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import renderSection from "../configs/sectionsMap.config";

export const FooterMenuTemplate = ({
  seoTitle,
  sections
}) => {
  return (
    <main>
      {sections.map((section, key) => renderSection(section, key))}
    </main>
  );
};

FooterMenuTemplate.propTypes = {
  seoTitle: PropTypes.string,
  sections: PropTypes.object,
};

const FooterMenu = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FooterMenuTemplate {...frontmatter} />
    </Layout>
  );
};

FooterMenu.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FooterMenu;