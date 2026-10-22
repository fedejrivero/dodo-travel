import { Link } from "react-router-dom";
import dodoTravel from "../../../images/dodoTravelWhite.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <img src={dodoTravel} alt="Dodo Travel" className="footer-logo" />
          <p className="footer-tagline">Te ayudamos a volar!</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Explorar</h4>
          <Link to="/paquetes" className="footer-link">Paquetes</Link>
          <Link to="/nosotros" className="footer-link">Nosotros</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contacto</h4>
          <a
            href="https://wa.me/5493513719249"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <span className="footer-muted">LEGAJO Nº 20223</span>
          <span className="footer-muted">CUIT 30-71903887-1</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Dodo Travel. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
