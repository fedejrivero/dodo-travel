import emptyImage from '../../../images/emptyImage.jpg';
import { format, parseISO } from 'date-fns';

const getCategoryClass = (category) => {
  if (!category) return '';
  return category.toLowerCase().replace(/\s+/g, '-');
};

const Trip = ({
  id,
  name,
  category,
  price,
  currency,
  dates,
  amenities,
  image_url
}) => {
  const formatDates = dates.map((date) => format(parseISO(date), 'dd/MM/yyyy')); 

  return (
  <div key={id} className="trip-card"> 
      <div className="trip-card-header">
        <div className="trip-card-image">
          <section 
            className="section"
            style={{ backgroundImage: `url(${image_url || emptyImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <span className={`trip-category ${getCategoryClass(category)}`}>
              {category}
            </span>
          </section>
        </div>
        <div className="trip-card-content">
          <div className="trip-card-title">
            <h3>{name}</h3>
          </div>
          <div className="trip-dates">
            <h4>Salidas:</h4>
            {formatDates.join(' - ')}
          </div>
        
          {amenities && amenities.length > 0 && (
            <div className="trip-amenities">
              <h4>Incluye:</h4>
              <ul>
                {amenities.map((amenity, index) => (
                  <li className="trip-amenity" key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="trip-card-footer">
        <div className="trip-price">
          <h3>{currency}</h3>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  )
};

export default Trip;
