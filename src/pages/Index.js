import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Freya Hu's Photo Website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">关于我的摄影网站</Link></h2>
          <p>
            让我的客人能看到我的历史拍摄，并选择自己想要的风格
          </p>
        </div>
      </header>
      <p> 欢迎你了解我!  如果想知道拍摄流程，看这里 <Link to="/about">美羊羊的拍摄流程</Link><br />
        如果想看我的历史作品, 看这里
        <Link to="/projects">美羊羊的历史作品</Link><br />
        <Link to="/contact">联系</Link> 我.
      </p>
    </article>
  </Main>
);

export default Index;
