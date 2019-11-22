import React from 'react';

import Layout from './Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <div as="h2">Dynamic Page</div>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DynamicPage;
