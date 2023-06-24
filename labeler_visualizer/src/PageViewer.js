import React from 'react';

const PageViewer = ({ htmlContent }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
  );
};

export default PageViewer;