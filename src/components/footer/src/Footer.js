import dodoTravel from "../../../images/dodoTravelWhite.png";
import useIsMobile from "../../../hooks/useIsMobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="footer">
      {!isMobile && (
        <div className="footer-content">
          <img src={dodoTravel} alt="dodoTravel" className="dodo-travel"/>
        </div>
        )
      }

      <div className="footer-content">
        <div className="footer-text">
          <p>Te ayudamos a volar!</p>
        </div>
      </div>

      {!isMobile && (
        <div className="footer-content">
          <p>LEGAJO Nº 20223</p>
          <p>CUIT 30-71903887-1</p>
        </div>
      )}
    </footer>
  );
};

export default Footer; 