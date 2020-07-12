import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-text section-header text-center">
              <div>
                <h2 className="section-title">¿Est&aacute;s interesado en afiliar tu negocio?</h2>
                <div className="desc-text">
                  <p>Solicita una demo de la plataforma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <form id="contactForm">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Nombre"
                      required
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      data-error="Please enter your Email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      data-error="Write your message"
                      required
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="submit-button">
                    <button className="btn btn-common" id="submit" type="submit">
                      Submit
                    </button>
                    <div id="msgSubmit" className="h3 hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-4 col-md-12">
            <div className="contact-img">
              <img src="img/contact/01.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
