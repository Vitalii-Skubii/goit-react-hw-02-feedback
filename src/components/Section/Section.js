import React from 'react';
import PropTipes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTipes = {
  title: PropTipes.string.isRequired,
  children: PropTipes.element.isRequired,
};

export default Section;
