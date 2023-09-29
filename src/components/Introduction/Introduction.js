import React, { useState } from 'react';
import './Introduction.css';

const content = [
  [
    '单人写真',
    '双人闺蜜照，情侣照',
    '氛围感视频',
    '男生改造计划',
    '领证跟拍，市政厅更拍',
  ],
  [
    '南湾一般一小时拍摄足够',
    '旧金山，婚礼相关两小时起',
    '在网站上选择想拍摄的地点和风格',
    '也可以自定想拍的地点的风格，请自行提供例子',
  ],
  [
    '头发比较离谱的男生需要找摄影师做临时发型',
    '发型不离谱的提前30-40分钟找我做发型',
    '穿搭会推荐，然后根据你现有衣服搭配',
    '我也会准备服饰外套救场',
  ],
];

const Introduction = () => {
  const [contentIndex, setContentIndex] = useState(0);
  return (
    <div id="tabs">
      <menu>
        <button
          type="submit"
          className={contentIndex === 0 ? 'active' : ''}
          onClick={() => setContentIndex(0)}
        >
          拍摄类型
        </button>
        <button
          type="submit"
          className={contentIndex === 1 ? 'active' : ''}
          onClick={() => setContentIndex(1)}
        >
          拍摄地点和时长
        </button>
        <button
          type="submit"
          className={contentIndex === 2 ? 'active' : ''}
          onClick={() => setContentIndex(2)}
        >
          男生改造计划
        </button>
      </menu>
      <div id="tab-content">
        <ul>
          {content[contentIndex].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
