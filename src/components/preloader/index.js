import React from 'react';

const PreLoader = () => {
  return (
    <>
      <a href="/" className="back-to-top">
        <i className="lni-chevron-up" />
      </a>
      <div id="preloader">
        <div className="loader" id="loader-1" />
      </div>
    </>
  );
};

export default PreLoader;
