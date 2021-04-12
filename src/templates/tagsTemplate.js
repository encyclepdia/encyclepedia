import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import get from 'lodash/get'

const location = get(this, 'props.location')

const Tags = ({ data }) => {
  return (
      <div>Tags</div>
  );
};

export default Tags;
