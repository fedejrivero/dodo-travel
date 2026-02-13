import Check from '../../check';

const Rates = ({rates}) => {
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
          <table className="rates-list">
            <thead>
              <tr key={index} className="rates-headers">
                <th className="rate-date">Fecha</th>
                <th className="rate-nights">Noches</th>
                {showBus && <th className="rate-bus">Bus</th>}
                <th className="rate-regime">Regimen</th>
                <th className="rate-assist">Asistencia</th>
                <th className="rate-excursions">Excursiones</th>
                <th className="rate-price">Precio</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((rate, index) => (
                <tr key={index} className="rate">
                  <td className="rate-date">{rate.date}</td>
                  <td className="rate-nights">{rate.nights}</td>
                  {showBus && <td className="rate-bus">{rate.bus}</td>}
                  <td className="rate-regime">{rate.regime}</td>
                  <td className="rate-assist">{rate.assist ? <Check /> : '-'}</td>
                  <td className="rate-excursions">{rate.excursions ? <Check /> : '-'}</td>
                  <td className="rate-price">
                    <div className="price-amount">
                      <span className="currency">{rate.currency}</span>
                      <span className="amount">{rate.price}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Rates;
