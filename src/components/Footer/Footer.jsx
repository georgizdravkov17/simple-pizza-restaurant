import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './Footer.css';

const Footer = () => {

   const navigate = useNavigate();  

  return(
      <footer className="footer">
            <p>© 2011 John Doe All Rights Reserved</p>
           <div className="icons">
                <a href="https://www.facebook.com" target="_blank">
                <FacebookIcon />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                <InstagramIcon />
                </a>
                <a href="https://www.youtube.com" target="_blank">
                <YouTubeIcon />
                 </a>
                <a href="https://www.google.com" target="_blank">
                <GoogleIcon />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                <LinkedInIcon />
                 </a>
           </div>
      </footer>
  );
}

export default Footer;

