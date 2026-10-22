import Divider from '../components/divider';
import { Categories, Products } from '../components/sections/index';

const Home = () => (
  <div className="page-content home-page">
    <header className="home-intro">
      <span className="home-eyebrow">Bienvenidos a Dodo Travel</span>
      <h1 className="home-title">¿A dónde querés viajar?</h1>
      <p className="home-subtitle">
        Elegí una categoría y descubrí nuestras salidas, promociones y destinos destacados.
      </p>
    </header>

    <section className="home-section">
      <Categories />
    </section>

    <section className="home-section">
      <Divider text="Consultanos por otros productos" />
      <Products />
    </section>
  </div>
);

export default Home;
