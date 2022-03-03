import React, { useState } from 'react';
import classes from './Accordion.module.css';

const Accordion = ({ id, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.accordion} open={isActive}>
      <div
        className={classes.title}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {title}
      </div>

      {isActive && <div className={classes.content}>{content}</div>}
    </div>
  );
};

export default Accordion;
