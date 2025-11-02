import React, { useState } from 'react';

const Conditions = () => {
  const [isConditionsExpanded, setIsConditionsExpanded] = useState(false);

  const toggleConditions = () => {
    setIsConditionsExpanded(!isConditionsExpanded);
  };

  return (
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
            <span>1. INTERMEDIACIÓN: DODO TRAVEL actúa únicamente como intermediario entre los pasajeros y los proveedores mayoristas que prestan servicios turísticos tales como pasajes aéreos, traslados, alojamientos, excursiones y demás prestaciones incluidas en el itinerario. Por lo tanto, no asume responsabilidad alguna por cancelaciones, demoras, modificaciones o cualquier otro inconveniente derivado de situaciones de fuerza mayor: fenómenos climáticos, pandemias, huelgas, conflictos sociales, decisiones gubernamentales u otros eventos imprevistos ajenos a nuestra intervención directa. </span>
            <span>2. CANCELACIONES: En caso de cancelación por parte del pasajero, se aplicará un cargo del 7% en concepto de gastos de gestión sobre el total del servicio contratado. A este importe se le sumarán los costos de cancelación que determine el operador mayorista, aerolínea o receptivo al cual se le hayan contratados los servicios descriptos en esta ficha. Estos costos varían según el proveedor y el tiempo de antelación con el que se realice la cancelación. El monto final de devolución no podrá ser estimado con exactitud hasta tanto no se confirme la baja (por escrito) de los servicios y se consulte con el mayorista. </span>
            <span>3. DOCUMENTACIÓN: Es exclusiva responsabilidad del pasajero contar con toda la documentación necesaria para realizar su viaje, incluyendo pero no limitándose a: Documento nacional de Identidad (DNI), pasaportes, visados, certificados de vacunación, declaraciones juradas y/o permisos especiales requeridos por los países de destino o escala. </span>
            <span>4. ASISTENCIA AL VIAJERO: Algunos destinos exigen el seguro de asistencia médica obligatorio. Si su paquete no lo incluye, recomendamos consultar un presupuesto para adquirirla con nosotros, en caso de preferir otra compañía el pasajero deberá contratar la asistencia por su cuenta antes de iniciar el viaje. </span>
            <span>5. RECOMENDACIONES: Se sugiere llevar siempre consigo la documentación necesaria y, en caso de viajar con menores, verificar si requiere permiso especial para su salida del país. Asimismo, se recuerda presentarse con una antelación mínima de 2 horas para vuelos nacionales y de 3 horas para vuelos internacionales, en caso de dirigirse directamente al aeropuerto. </span>
            <span>6. CONFORMIDAD: El pasajero declara haber leído, comprendido y aceptado en su totalidad las condiciones generales detalladas en el presente documento. Al confirmar este documento, presta su conformidad expresa con cada uno de los puntos aquí establecidos, eximiendo a DODO TRAVEL de cualquier responsabilidad derivada de situaciones contempladas en los ítems anteriores.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conditions;

