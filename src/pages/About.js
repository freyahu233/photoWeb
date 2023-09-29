import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
import Introduction from '../components/Introduction/Introduction';

const About = () => {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  return (
    <Main title="拍摄介绍" description="感谢你选择找我记录">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">拍摄介绍</Link>
            </h2>
            <p>(感谢你选择找我记录)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
        <Introduction />
      </article>
    </Main>
  );
};

export default About;
