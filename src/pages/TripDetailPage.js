import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTrip } from '../services/tripService';
import './TripDetailPage.scss';
import emptyImage from '../images/emptyImage.jpg';
import useIsMobile from '../hooks/useIsMobile';
import { getRatesByTripId } from '../services/rateService';
import Rates from '../components/rates';
import Amenities from '../components/amenities';
import RatesMobile from '../components/rates/src/RatesMobile';
import Conditions from '../components/conditions';

const TripDetailPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const data = await getTrip(id);
        setTrip(data);
      } catch (err) {
        setError('Error al cargar el paquete. Por favor, intente nuevamente.');
        console.error('Error fetching trip:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchRates = async () => {
      try {
        const data = await getRatesByTripId(id);
        setRates(data);
      } catch (err) {
        setError('Error al cargar las tarifas. Por favor, intente nuevamente.');
        console.error('Error fetching rates:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
    fetchRates();
  }, [id]);

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!trip) return <div className="not-found">Paquete no encontrado</div>;

  return (
    <div className="page-content trip-detail-container">
      <div className="trip-detail-link">
        <Link to="/paquetes" className="back-link">
          ← Volver a todos los paquetes
        </Link>
      </div>

      <div className="trip-detail-header">
        <section 
          className="trip-detail-image"
          style={{ backgroundImage: `url(${trip.image_url || emptyImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {isMobile && (
            <span className={`trip-category`}>
              {trip.category}
            </span>
          )}
        </section>
        <div className="trip-detail-summary">
          <div className="trip-detail-title">
            <h1>{trip.name}</h1>
            {!isMobile && (
              <h4 className="trip-detail-category">
                {trip.category}
              </h4>
            )}
          </div>
          <div className="trip-price">
            <span>Desde</span>
            <div className="price-amount">
              <span className="currency">{trip.currency}</span>
              <span className="amount">{trip.price}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="trip-detail-content">

        <div className="trip-detail-info">
          {trip.description && (
            <div className="trip-description">
              <h3>Descripción</h3>
              <p>{trip.description || 'No hay descripción disponible.'}</p>
            </div>
          )}

          <div className="trip-detail-amenities">
            <h3>Incluye</h3>
            {trip.amenities && (
              <Amenities  amenities={trip.amenities} />
            )}
          </div>
          <div className="trip-dates">
            <h3>Fechas y tarifas disponibles</h3>
            {rates?.length > 0 ? 
              (isMobile ? <RatesMobile rates={rates} /> : <Rates rates={rates} />) :
              (trip.dates ? 
                <div>{trip.dates}</div>

              : <p> No hay fechas disponibles </p>)}
          </div>
        </div>

        <Conditions />
      </div>
    </div>
  );
};

export default TripDetailPage;
