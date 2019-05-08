import React from "react";
import PropTypes from "prop-types";

const Table = props => (
  <div className="table" onClick={props.onClick}>
    {props.children}
  </div>
);

Table.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any
};

export default Table;
