import React from "react";
import PropTypes from "prop-types";
import { graphql, withPrefix } from "gatsby";

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
  sections: PropTypes.object,
};

const RenderPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
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
  const { pageTitle, settings } = data.markdownRemark.frontmatter;
  const ogImg = settings.shareImage?.childImageSharp.fixed.src
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
  query MainTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
