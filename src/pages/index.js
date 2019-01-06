import React from 'react';
import { Link } from 'gatsby';
import d3 from 'd3';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Map from '../components/HomepageMap/index';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Map />
  </Layout>
);

export default IndexPage
