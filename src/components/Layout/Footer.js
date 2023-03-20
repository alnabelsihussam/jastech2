import React from "react";

const Footer = () => {
  return (
    <div>
      {/* /.content-wrapper */}
      <footer className="main-footer">
        <strong>
          Copyright © 2023{" "}
          <a href="https://www.jastech-solutions.de/">JaStech-solutions </a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1
        </div>
      </footer>
    </div>
  );
};

export default Footer;
