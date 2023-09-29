import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Freya&apos;Photo WebSite</h2>
        <p><a href="mailto:freyahu23@gmail.com">freyahu23@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>关于我</h2>
      <p>大家好，我是在南湾的独立女摄。已经有近8年人像拍摄经验，审美在线，擅长拍男生，更擅长拍女生。欢迎大家找我拍照</p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">Freya Hu</p>
    </section>
  </section>
);

export default SideBar;
