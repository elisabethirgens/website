import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from './FeatureCard.module.scss';

const FeatureCard = props => {
  // link should be the slug for whatever the featurecard is linking to
  const { title, description, sizes, features, link = '' } = props;
  return (
    <Link to={link} className={styles.FeatureCard}>
      <section className={styles.image}>
        <Img
          outerWrapperClassName={styles.imageContainer}
          style={{ height: '100%', width: '100%' }}
          sizes={sizes}
        />
      </section>
      <section className={styles.header}>
        <h4>{title}</h4>
      </section>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
      <section className={styles.footer}>
        <ul>
          {features &&
            features.map(feature => <li key={feature}>{feature}</li>)}
        </ul>
      </section>
    </Link>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  link: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.object),
};

export default FeatureCard;
