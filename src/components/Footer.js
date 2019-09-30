import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>AidConnect@outlook.com</dd>
        <dt>Disclaimer: This site is only for a school project</dt>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/DerekSgov/Seng321Designer"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
