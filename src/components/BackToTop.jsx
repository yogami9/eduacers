import  { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <a href="#top" className={`back-top-btn ${visible ? 'active' : ''}`} aria-label="Back to top" onClick={scrollToTop}>
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
  );
};

export default BackToTop;