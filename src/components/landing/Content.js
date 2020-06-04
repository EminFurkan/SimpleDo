import React, { useState, useEffect } from 'react';
import showcaseLarge from '../../assets/showcase-large.png';
import showcaseSmall from '../../assets/showcase-small.png';
import coffeeBreak from '../../assets/coffee-break.svg';
import phone from '../../assets/phone.png';
import { Link } from 'react-router-dom';

export const Content = () => {
  const [display, setDisplay] = useState(false);

  const handleEvent = () => {
    if (window.scrollY === window.innerHeight) {
      setDisplay(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleEvent);
    return () => window.removeEventListener('scroll', handleEvent);
  }, []);

  return (
    <main>
      <section className="showcase-introduction">
        <span className="showcase-introduction__text">
          <p>Keeping up with life.</p>
          <p>Made simple.</p>
          <Link to="/users/showRegister">
            <button>Sign up</button>
          </Link>
        </span>
        <span className="showcase-introduction__image">
          <img src={phone} alt="phone" />
          <img
            className="showcase-small"
            src={showcaseSmall}
            alt="showcase-small"
          />
        </span>
        <img className="coffee-break" src={coffeeBreak} alt="coffee" />
      </section>
      <section className="showcase-detail">
        <img src={showcaseLarge} alt="showcase-large" />
        {display && (
          <>
            <p>Free up your mental space.</p>
            <ul>
              <li>Create specific projects for your goals</li>
              <li>Set task priorities to make them stand out</li>
              <li>Choose a due date to make it stick</li>
            </ul>
          </>
        )}
      </section>
    </main>
  );
};
