import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Jerusha from '../assets/images/Jerusha.jpg'
import Andrew from '../assets/images/Andrew.jpg'
import Samuel from '../assets/images/Samuel.jpg'
import Alex from '../assets/images/Alex.jpg'
import Derek from '../assets/images/Derek.jpg'
import ShoYa from '../assets/images/Sho.jpg'
import Charles from '../assets/images/Charles.jpg'
import RFP from '../assets/images/Requirements-Document-template.pdf'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Our Mission</h2>
                </header>
                <p>Our mission at Snowlutions is to provide cutting edge modern solutions to an age old problem. We employ advanced predictive models and an array of data sources to find out when and where avalanches will happen before they do, reducing the risk for outdoor enthusiasts to do what they love.</p>
              </div>
              <span className="image">
                <img src={'https://images.unsplash.com/photo-1555104876-061df4ef2c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'} alt="" />
              </span>
            </div>
          </section>
          <section id="first" className="main special">
            <header className="major">
              <h2>Our Team</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image headshot"><img src={Jerusha} alt=""/></span>
                <h3>Chua, Jerusha</h3>
                <p>Position Here</p>
              </li>
              <li>
              <span className="image headshot"><img src={Andrew} alt=""/></span>
                <h3>Eng, Andrew</h3>
                <p>Position Here</p>
              </li>
              <li>
              <span className="image headshot"><img src={Samuel} alt=""/></span>
                <h3>Joy, Samuel</h3>
                <p>Position Here</p>
              </li>
              <li>
              <span className="image headshot"><img src={Alex} alt=""/></span>
                <h3>Schell, Alex</h3>
                <p>Position Here</p>
              </li>
              <li>
              <span className="image headshot"><img src={Derek} alt=""/></span>
                <h3>Siemens, Derek</h3>
                <p>Position Here</p>
              </li>
              <li>
              <span className="image headshot"><img src={ShoYa} alt=""/></span>
                <h3>Voorthuyzen, Sho Ya</h3>
                <p>Position Here</p>
              </li>
              <li>
              <span className="image headshot"><img src={Charles} alt=""/></span>
                <h3>Yang, Charles</h3>
                <p>Position Here</p>
              </li>
            </ul>
          </section>
          <section id="cta" className="main special">
            <header className="major">
              <h2>Requirements document</h2>
              <p>As a response to the RFP put forward by Steep Mountaineering, we have put together this requirments document for a solution system.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href='../assets/images/Requirements-Document-template.pdf' className="button special">
                    View Document
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
