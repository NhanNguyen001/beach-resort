import React from 'react';

function hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

hero.defaultProps = {
  hero: 'defaultHero'
};

export default hero;
