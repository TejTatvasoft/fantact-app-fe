import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Event.module.css';
import { Button } from '@mui/material';

const Event = (props) => {
  return (
    <li className={classes.movie}>
      
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Button><Link to={`/eventDetials/${props.id}`}>GET IN</Link></Button>
    </li>
  );
};

export default Event;
