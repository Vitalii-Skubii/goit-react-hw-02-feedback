import React from 'react';
import PropTipes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTipes = {
  title: PropTipes.string.isRequired,
  children: PropTipes.element.isRequired,
};

export default Section;
