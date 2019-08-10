import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const SkateparkPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <h2>{title}</h2>
      <PageContent content={content}></PageContent>
    </section>
  );
};

SkateparkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SkateparkPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SkateparkPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

SkateparkPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SkateparkPage;

export const skateparkPageQuery = graphql`
  query SkateparkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
