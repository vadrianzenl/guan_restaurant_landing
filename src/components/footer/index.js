import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section id="footer-Content">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="col-12 footer-col last d-lg-flex d-md-flex d-block">
                  <div className="col-lg-6 col-md-6 col-xs-12">
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
                  <div className="col-lg-6 col-md-6 col-xs-12 text-lg-right text-md-right m-auto">
                    <span className="stores">
                      <p>Pronto disponible en </p>
                    </span>
                    <span className="stores">
                      <img src="img/icon-googleplay.png" alt="Google Play" />
                    </span>
                    <span className="stores">
                      <img src="img/blanco-apple-negras.png" alt="Apple Store" />
                    </span>
                  </div>
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
