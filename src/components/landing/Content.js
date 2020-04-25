import React, { useEffect, useState } from 'react'
import showcase from '../../assets/showcase-phone.png'
import showcaseLarge from '../../assets/showcase-large.png'
import phone from '../../assets/phone.png'
import nav from '../../assets/nav.png'
import projects from '../../assets/projects.png'
import tasks from '../../assets/tasks.png'
import priority from '../../assets/priority.png'
import date from '../../assets/date.png'
import { Link } from 'react-router-dom'
import bg from '../../assets/bg.jpeg'

export const Content = () => {
  let [position, setPosition] = useState(0)

  useEffect(() => {
    const onScroll = window.addEventListener('scroll', () => {
      setPosition(window.pageYOffset)
    })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <section className="main-content">
        <div
          className="main-content__text"
          style={
            position < 572
              ? { transform: `translate3d(0px, ${position * 1}px, 0px)` }
              : { transform: 'translate3d(0, 572px, 0)' }
          }
        >
          <h2
            className={position < 1 ? 'heading-top' : 'animation-off'}
            style={{ opacity: 1 - position * 0.005 }}
          >
            Keeping up with life.
          </h2>
          <h2
            className={position < 1 ? 'heading-bottom' : 'animation-off'}
            style={{ opacity: 1 - position * 0.005 }}
          >
            Made
          </h2>
          <span className="dynamic-simple">simple</span>
          <span className="dynamic-do" style={{ opacity: position * 0.005 }}>
            do
          </span>
          <Link to="/users/showRegister">
            <button>Sign up</button>
          </Link>
        </div>
        <div className="main-content__image">
          <div
            className="dynamic-container"
            style={
              position < 3300
                ? { transform: `translate3d(0px, ${position * 1}px, 0px)` }
                : { transform: 'translate3d(0, 3300px, 0)' }
            }
          >
            <img className="showcase-small" src={showcase} alt="showcase" />
            <img className="phone" src={phone} alt="phone" />
          </div>
        </div>
      </section>
      <section className="showcase">
        <div
          style={
            position > 3300
              ? {
                  transform: `scale3d(${1 - position * 0.00005},
              ${1 - position * 0.00005},
              ${1 - position * 0.00005})`,
                  transition: '.2s ease-out'
                }
              : undefined
          }
        >
          <img
            src={showcaseLarge}
            alt="showcase-large"
            style={
              position > 903
                ? {
                    opacity: 1,
                    transform: `translate3d(0px, ${-910 + position * 1}px, 0px)`
                  }
                : position > 20
                ? { opacity: `${position * 0.001}` }
                : undefined
            }
          />
        </div>
        <span
          className="showcase__text"
          style={
            position > 1050
              ? {
                  opacity: `${position * 0.00065}`,
                  transform: `translate3d(0,${-600 + position * 0.8}px,0)`
                }
              : undefined
          }
        >
          <span
            style={
              position > 1565
                ? {
                    opacity: `${2.5 - position * 0.00086}`
                  }
                : undefined
            }
          >
            <h2>Free up your mental space</h2>
            <p>Everything that matters to you.</p>
            <p>Even when the lights are out.</p>
          </span>
        </span>
      </section>
      <section className="lights-out">
        <span
          className={position > 6910 ? 'switch' : undefined}
          style={
            position < 5100
              ? {
                  opacity: `${-4.5 + position * 0.001}`
                }
              : {
                  transform: `translate3d(0, ${-5100 + position * 1}px, 0)`,
                  opacity: `${-4.36 + position * 0.001}`
                }
          }
        >
          Ready to be more productive?
        </span>
      </section>
      <section className="album">
        <div className="album__container">
          <span>
            <img src={nav} alt="nav" />
          </span>
          <div className="album__container-introduction">
            <div className="projetcs">
              <p>Arrange your work with customizable projects</p>
              <img src={projects} alt="projects" />
            </div>
            <div>
              <p>Easily accessible task lists.</p>
              <img src={tasks} alt="tasks" />
            </div>
            <div className="date-priority">
              <p>Prioritize. Manage. In your own time.</p>
              <img src={date} alt="priority" />
              <img src={priority} alt="priority" />
            </div>
          </div>
        </div>
      </section>
      <section className="outro">
        <div>
          <img
            src={bg}
            alt="bg"
            style={position > 6500 ? { transform: 'scale(1)' } : undefined}
          />
          <div className="tablet-content">
            <img src={phone} alt="phone" />
            <img src={showcase} alt="showcase" className="showcase-tablet" />
          </div>
          <div className="tablet-text">
            <p>Keeping up with life.</p>
            <p>Made simple</p>
            <Link to="/users/showRegister">
              <button>Sign up</button>
            </Link>
          </div>
          <div className="logo">
            <img src="/images/logo.svg" alt="logo" />
            <h2>simpledo</h2>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>simpledo&copy; all rights reserved. </p>
      </footer>
    </>
  )
}
