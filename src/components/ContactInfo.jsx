import React from 'react';
import logoImg from './assets/icons/logo.png'; // Your logo image path
import whatsappImg from './assets/icons/whatsapp.png';
import facebookImg from './assets/icons/facebook.png';
import linkedinImg from './assets/icons/linkedin.png';
import instagramImg from './assets/icons/instagram.png';
import tiktokImg from './assets/icons/tiktok.png';
import twitterImg from './assets/icons/twitter.png';
import youtubeImg from './assets/icons/youtube.png';
import './assets/css/contactInfo.css';

const ContactInfo = () => {
  const socialMediaLinks = {
    whatsapp: { url: "https://wa.me/1234567890", img: whatsappImg },
    facebook: { url: "https://facebook.com/yourpage", img: facebookImg },
    linkedin: { url: "https://linkedin.com/in/yourprofile", img: linkedinImg },
    instagram: { url: "https://instagram.com/yourprofile", img: instagramImg },
    tiktok: { url: "https://tiktok.com/@yourprofile", img: tiktokImg },
    twitter: { url: "https://twitter.com/yourprofile", img: twitterImg },
    youtube: { url: "https://youtube.com/yourchannel", img: youtubeImg },
  };

  return (
    <div className="contact-info">
      <div className="container">
        <img src={logoImg} alt="Logo" className="logo" />
        
        <div className="contact-details">
          <p className="contact-item">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            <a href="mailto:info@academia.com">eduacers1@gmail.com</a>
          </p>
          <p className="contact-item">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            <a href="tel:+011234567890">+44 7878 497830</a>
          </p>
        </div>

        <div className="social-icons">
          {Object.entries(socialMediaLinks).map(([platform, { url, img }]) => (
            <a 
              key={platform} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={platform}
            >
              <img  
                src={img} 
                alt={`${platform} icon`} 
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;