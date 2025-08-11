import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Página no encontrada</h2>
        <p className="not-found__message">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="not-found__button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
