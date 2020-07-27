import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section id="footer-Content">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-col last">
                  <span className="fa-stack">
                    <a href="#your-link">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-facebook-f fa-stack-1x" />
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-instagram fa-stack-1x" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info text-center">
                  © Copyright 2020 - Todos los derechos reservados - Guan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
