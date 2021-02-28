import React from 'react';
import { Layout, SEO } from 'components/common';
import Grid from '@material-ui/core/Grid';
import News_Card from '../components/blog/News_Card'
import Header from '../components/theme/Header/index'

export default () => (
  <Layout>
    <SEO title="News blog" location="/blog" />
      <Header/>
      <Grid container
          spacing={5}
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
          >
        <News_Card/>
      </Grid>
  </Layout>
);
