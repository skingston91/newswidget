import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const NewsItem = ({ title, link, date, source }) =>
  <a className="NewsItem" href={ link }>
    <h3 className="NewsItemTitle"> { title } </h3>
    <p className="NewsItemDate"> { date } </p>
    <div className="NewsItemSourceContainer">
      <h3 className="NewsItemSource"> { source } </h3>
    </div>
  </a>;

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
};

export default NewsItem;
