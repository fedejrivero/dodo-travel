import { format } from 'date-fns';

const Rates = ({rates}) => {

  const rateGroupByHotel = rates.reduce((accumulator, currentValue) => {
    const hotel = currentValue.hotel;
  
    if (!accumulator[hotel]) {
      accumulator[hotel] = []; 
    }
    accumulator[hotel].push(currentValue); 
  
    return accumulator;
  }, {});

  return (
    <div className="rates">
      {Object.entries(rateGroupByHotel).map(([hotel, rates], index) => (
        <div className="hotel">
          <h4 key={index}>HOTEL {hotel}</h4>
          <div className="rates-list">
            <div key={index} className="rates-headers">
              <span className="rate-date">Fecha</span>
              <span className="rate-price">Precio</span>
            </div>
            {rates.map((rate, index) => (
              <div key={index} className="rate">
                <span className="rate-date">{format(rate.date, 'dd/MM/yyyy')}</span>
                <span className="rate-price">{rate.currency}{rate.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rates;
