import React from 'react';

const AboutUs = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features-text section-header text-center">
              <div>
                <h2 className="section-title">¿C&oacute;mo funciona Guan?</h2>
                <div className="desc-text">
                  <p>
                    Acumula puntos y ahorra pagando con tus puntos Guan, ademas obten miles de descuentos en tus lugares favoritos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="fas fa-store" />
              </div>
              <h4>Llega</h4>
              <p>
                Llega a tu restaurante favorito.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="fas fa-qrcode" />
              </div>
              <h4>Pide</h4>
              <p>
                Escanea la carta digital y realiza el pedido desde tu celular. Espera
                que llegue tu comida y disfrútalo.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="fas fa-credit-card" />
              </div>
              <h4>Paga</h4>
              <p>
                Paga desde tu celular, ¡No te olvides de calificar la atenci&oacute;n!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
