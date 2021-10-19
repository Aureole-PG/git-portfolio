import PropTypes from "prop-types";
const ItemCard = ({ title, description, language, links, color = 1 }) => {
  return (
    <div className={`item-card color-${color}`}>
      <div className="card-content d-flex flex-row">
        <div className="languages">
          <div className="icon-info">
            <i className={`devicon-${language.toLowerCase()}-plain`}></i>
            <p>{language}</p>
          </div>
        </div>

        <div className="description">
          <p className="fst-italic">{description}</p>
        </div>
        <div className={`card-title color-${color}`}>
          <p className=" no-margin text-title "> {title}</p>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <a className="btn-link-" target="_blank" rel="noreferrer" href={links}>
          Git repository
        </a>
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
};
export { ItemCard };
