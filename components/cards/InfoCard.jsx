import PropTypes from "prop-types";
const InfoCard = ({ title, subtitle, info, time, topics = [] }) => {
  return (
    <div className="row ">
      <div className="col info-card">
        <div>
          <p className="text-title">{title}</p>
        </div>
        <div className="card-content">
          <div>
            <p className="text-subtitle no-margin">{subtitle}</p>
            <p className="fst-italic">{info}</p>
          </div>
          <ul>
            {topics.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>

          <div>
            <p className="text-end text-time">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  time: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string),
};

export { InfoCard };
