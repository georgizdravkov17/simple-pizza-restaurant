import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsLetter.css';

const NewsLetter = () => {

    const navigate = useNavigate();

   return(
       <div className="news-letter" onClick={ () => {navigate("/contact") }}>
           <h5 className="text">Интересувате се от нашите услуги? Изпратете ни запитвате!</h5>
       </div>
   );
}

export default NewsLetter;