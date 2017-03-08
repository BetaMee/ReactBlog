import React,{Component} from  'react';
import {Link} from 'react-router';
import CSSStyles from './NotFoundPage.css';

const NotFoundPage=({router})=>{
  console.log(router);
  return (
      <div className={CSSStyles.main}>
        <div className={CSSStyles.body}>
             Uncaught ReferenceError: {router.locationBeforeTransitions.pathname} is not defined
        </div>
      </div>
  )};


export default NotFoundPage;