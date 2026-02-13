import Check from '../../check';

const RatesMobile = ({rates}) => {

  const rateGroupByHotel = rates.reduce((accumulator, currentValue) => {
    const hotel = currentValue.hotel;
  
    if (!accumulator[hotel]) {
      accumulator[hotel] = []; 
    }
    accumulator[hotel].push(currentValue); 
  
    return accumulator;
  }, {});

  const showBus = rates.some(rate => !!rate.bus);

  return (
    <div className="rates">
      {Object.entries(rateGroupByHotel).map(([hotel, rates], index) => (
        <div className="hotel">
          <h4 key={index}>{hotel}</h4>
          {rates.map((rate, index) => (
           <table className="rates-list">
            <tr className="rate-date">
              <th>Fecha</th>
              <td>{rate.date}</td>
            </tr>
            <tr className="rate-nights">
              <th>Noches</th>
              <td>{rate.nights}</td>
            </tr>
            {showBus && <tr className="rate-bus">
              <th>Bus</th>
              <td>{rate.bus}</td>
            </tr>}
            <tr className="rate-regime">
              <th>Regimen</th>
              <td>{rate.regime}</td>
            </tr>
            <tr className="rate-assist">
              <th>Asistencia</th>
              <td>{rate.assist ? <Check /> : '-'}</td>
            </tr>
            <tr className="rate-excursions">
              <th>Excursiones</th>
              <td>{rate.excursions ? <Check /> : '-'}</td>
            </tr>
            <tr className="rate-price">
              <th>Precio</th>
              <td>
                <div className="price-amount">
                  <span className="currency">{rate.currency}</span>
                  <span className="amount">{rate.price}</span>
                </div>
              </td>
            </tr>
           </table>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RatesMobile;
