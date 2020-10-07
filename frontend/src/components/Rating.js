import React from "react";
import PropTypes from "prop-types";

const Rating = ({ stars, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            stars >= 1
              ? "fas fa-star"
              : stars >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
          style={{ color }}
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 2
              ? "fas fa-star"
              : stars >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
          style={{ color }}
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 3
              ? "fas fa-star"
              : stars >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
          style={{ color }}
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 4
              ? "fas fa-star"
              : stars >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
          style={{ color }}
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 5
              ? "fas fa-star"
              : stars >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
          style={{ color }}
        ></i>
      </span>
      <span style={{ marginLeft: "7px", fontWeight: "100", color: "gray" }}>
        {text && text}
      </span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f0ec07",
};

Rating.propTypes = {
  // stars: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
