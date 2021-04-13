import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import get from 'lodash/get'

const location = get(this, 'props.location')

const Tags = ({pageContext, data }) => {
  return (
      <div>Tags</div>
        <h1>{pageContext}</h1>    
  );
};

export default Tags;
export const pageQuery = graphql`
    query($tag: String) {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000,
  filter: { metadata: { category: { in: [$tag] } } }
) {
      edges {
        node {
          metadata {
            description
            category
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
