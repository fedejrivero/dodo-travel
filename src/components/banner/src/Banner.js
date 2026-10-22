import { Link } from 'react-router-dom';
import bannerImage from '../../../images/bannerImage.jpeg';
import bannerLogo from '../../../images/bannerLogo.png';

const Banner = () => (
  <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="banner-overlay" />
    <div className="banner-content">
      <img src={bannerLogo} alt="Dodo Travel" className="bannerLogo" />
      <h1 className="banner-title">Te ayudamos a volar</h1>
      <p className="banner-subtitle">
        Destinos nacionales, internacionales y salidas grupales.
      </p>
      <Link to="/paquetes" className="banner-cta">
        Ver paquetes
      </Link>
    </div>
  </section>
);

export default Banner;
