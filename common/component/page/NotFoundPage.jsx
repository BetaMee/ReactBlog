import React,{Component} from  'react';
import {Link} from 'react-router';


const NotFoundPage=()=>(
      <div>
       404 Not Found!<br/>
       <Link to="/">Back to Index</Link>
      </div>
  );


export default NotFoundPage;