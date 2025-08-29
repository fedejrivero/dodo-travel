import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTrip } from '../services/tripService';
import './TripDetailPage.scss';
import emptyImage from '../images/emptyImage.jpg';
import useIsMobile from '../hooks/useIsMobile';
import { getRatesByTripId } from '../services/rateService';
import Rates from '../components/rates';
import Amenities from '../components/amenities';

const TripDetailPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isConditionsExpanded, setIsConditionsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const toggleConditions = () => {
    setIsConditionsExpanded(!isConditionsExpanded);
  };

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
          {!isMobile && (
            <div className="trip-price">
              <span>Desde</span>
              <div className="price-amount">
                <span className="currency">{trip.currency}</span>
                <span className="amount">{trip.price}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="trip-detail-content">

        <div className="trip-detail-info">
          <div className="trip-description">
            <h3>Descripción</h3>
            <p>{trip.description || 'No hay descripción disponible.'}</p>
          </div>

          <div className="trip-detail-amenities">
            <h3>Incluye</h3>
            {trip.amenities && (
              <Amenities  amenities={trip.amenities} />
            )}
          </div>
          <div className="trip-dates">
            <h3>Fechas y tarifas disponibles</h3>
            {rates ? <Rates rates={rates} /> : <p>No hay fechas disponibles</p>}
          </div>
        </div>

        <div className="trip-detail-footer">
          <button 
            className="conditions-toggle" 
            onClick={toggleConditions}
            aria-expanded={isConditionsExpanded}
            aria-controls="trip-conditions"
            type="button"
          >
            <h3>
              CONDICIONES GENERALES DE RESERVA - DODO TRAVEL
              <span className={`toggle-icon ${isConditionsExpanded ? 'expanded' : ''}`}>
                ▼
              </span>
            </h3>
          </button>
          {isConditionsExpanded && (
          <div 
            id="trip-conditions"
            className="trip-detail-conditions"
          >
            <div className="conditions-content">
              <span>1. INTERMEDIACIÓN: DODO TRAVEL actúa únicamente como intermediario entre los pasajeros y los proveedores mayoristas que prestan servicios turísticos tales como pasajes aéreos, traslados, alojamientos, excursiones y demás prestaciones incluidas en el itinerario. Por lo tanto, no asume responsabilidad alguna por cancelaciones, demoras, modificaciones o cualquier otro inconveniente derivado de situaciones de fuerza mayor: fenómenos climáticos, pandemias, hueglas, conflictos sociales, decisiones gubernamentales u otros eventos imprevistos ajenos a nuestra intervención directa. </span>
              <span>2. CANCELACIONES: En caso de cancelación por parte del pasajero, se aplicará un cargo del 7% en concepto de gastos de gestión sobre el total del servicio contratado. A este importe se le sumarán los costos de cancelación que determine el operador mayorista, aerolínea o receptivo al cual se le hayan contratados los servicios descriptos en esta ficha. Estos costos varían según el proveedor y el tiempo de antelación con el que se realice la cancelación. El monto final de devolución no podrá ser estimado con exactitud hasta tanto no se confirme la baja (por escrito) de los servicios y se consulte con el mayorista. </span>
              <span>3. DOCUMENTACION: Es exclusiva responsabilidad del pasajero contar con toda la documentación necesaria para realizar su viaje, incluyendo pero no limitandose a: Documento nacional de Identidad (DNI), pasaportes, visados, certificados de vacunación, declaraciones juradas y/o permisos especiales requeridos por los paises de destino o escala. </span>
              <span>4. ASISTENCIA AL VIAJERO: Algunos destinos exigen el seguro de asistencia médica obligatorio. Si su paquete no lo incluye, recomendamos consultar un presupuesto para adquirirla con nosotros, en caso de preferir otra compañía el pasajero deberá contratar la asistencia por su cuenta antes de iniciar el viaje. </span>
              <span>5. RECOMENDACIONES: Se sugiere llevar siempre consigo la documentación necesaria y, en caso de viajar con menores, verificar si requiere permiso especial para su salida del país. Asimismo, se recuerda presentarse con una antelación mínima de 2 horas para vuelos nacionales y de 3 horas para vuelos internacionales, en caso de dirigirse directamente al aeropuerto. </span>
              <span>6. CONFORMIDAD: El pasajero declara haber leído, comprendido y aceptado en su totalidad las condiciones generales detalladas en el presente documento. Al confirmar este documento, presta su conformidad expresa con cada uno de los puntos aquí establecidos, eximiento a DODO TRAVEL de cualquier responsabilidad derivada de situaciones contempladas en los ítems anteriores.</span>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripDetailPage;
