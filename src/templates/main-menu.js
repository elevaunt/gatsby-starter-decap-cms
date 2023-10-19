import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import renderSection from "../configs/sectionsMap.config";

export const MainMenuTemplate = ({
  seoTitle,
  sections
}) => {
  return (
    <main>
      {sections.map((section, key) => renderSection(section, key))}
    </main>
  );
};

MainMenuTemplate.propTypes = {
  seoTitle: PropTypes.string,
  sections: PropTypes.object,
};

const MainMenu = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <MainMenuTemplate {...frontmatter} />
    </Layout>
  );
};

MainMenu.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default MainMenu;