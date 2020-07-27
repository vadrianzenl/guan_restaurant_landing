import React, {useState} from 'react';
import saveBusiness from '../../api/business';
import { toast } from 'react-nextjs-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = setValue => e => setValue(e.target.value);
  const handleSaveBusiness = () => {
    if(!email) {
      toast.notify(`Por favor, Ingresa tu Email para poder contactarte.`, {duration: 5, type: "error"});
      return;
    }
    saveBusiness(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  };
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
                      value={name}
                      onChange={handleChange(setName)}
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
                      value={email}
                      onChange={handleChange(setEmail)}
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
                      value={message}
                      onChange={handleChange(setMessage)}
                      placeholder="Mensaje"
                      rows="4"
                      data-error="Write your message"
                      required
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="submit-button">
                    <button type="button" className="btn btn-common" onClick={handleSaveBusiness}>Enviar</button>
                    <span className="fa-stack">
                      <a href="mailto:contacto@guan.pe">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fas fa-envelope fa-stack-1x" />
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="https://api.whatsapp.com/send?phone=+51995542843">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-whatsapp fa-stack-1x" />
                      </a>
                    </span>
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
