import dodo from "../images/dodo.png";

const Nosotros = () => {
    return (
        <div className="page-content nosotros-page">
            <div className="nosotros-content">
                <div className="nosotros-text">
                    <span className="nosotros-eyebrow">Nosotros</span>

                    <h1 className="nosotros-title">
                        Dodo Travel nació para acompañarte a volar.
                    </h1>

                    <p className="nosotros-lead">
                        Queremos que viajar sea simple y solo se trate de conocer el mundo.
                    </p>

                    <div className="nosotros-goal">
                        <span className="nosotros-goal-label">¿Nuestro objetivo?</span>
                        <p>
                            Acompañarte en cada paso. Desde que soñás con el destino,
                            hasta que volvés con la valija llena de recuerdos.
                        </p>
                    </div>

                    <blockquote className="nosotros-quote">
                        Inspirados en el ave que no podía volar, subimos al Dodo al avión,
                        creamos una agencia para demostrar que siempre existe una manera
                        de llegar más lejos.
                    </blockquote>

                    <p className="nosotros-closing">
                        Y acá estamos para eso: <strong>te ayudamos a volar.</strong>
                    </p>

                    <div className="nosotros-welcome">
                        <p className="nosotros-welcome-title">Bienvenidos a Dodo Travel.</p>
                        <p className="nosotros-welcome-sub">Tu viaje arranca acá.</p>
                    </div>
                </div>

                <div className="nosotros-image">
                    <img src={dodo} alt="Dodo Travel" />
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
