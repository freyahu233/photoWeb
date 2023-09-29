import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Freya via email @ freyahu23@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">联系方式</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>你可以通过邮箱或者微信联系我 </p>
        <EmailLink /><br />
        <p>邮箱:freyahu23@gmail.com</p>
        <p>微信:FreyaH23</p>

      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
