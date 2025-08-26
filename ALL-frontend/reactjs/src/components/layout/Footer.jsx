import './footer.css';
import MSPlogo from '/assets/MSP_LOGO_transperant.png';
import instagram from '/assets/icons/instagram-logo.svg';
import tiktok from '/assets/icons/tiktok-logo.svg';
import youtube from '/assets/icons/youtube-logo.svg';
import envelope from '/assets/icons/envelope.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__brand'>
          <img className='footer__logo' src={MSPlogo} alt='MSP MIU Logo' />
          <p className='footer__tagline'>Empowering students through technology, collaboration & continuous learning.</p>
        </div>

        <nav className='footer__nav' aria-label='Footer Navigation'>
          <div className='footer__linkColumn'>
            <h4>Explore</h4>
            <a href='#'>Homepage</a>
            <a href='#about'>About Us</a>
            <a href='#events'>Events & Activities</a>
            <a href='#departments'>Departments & Teams</a>
            <a href='#resources'>Learning Resources</a>
          </div>
          <div className='footer__linkColumn'>
            <h4>Get Involved</h4>
            <a href='#membership'>Membership & Recruitment</a>
            <a href='#gallery'>Gallery & Media</a>
            <a href='#blog'>Blog & News</a>
            <a href='#contact'>Contact & Community</a>
            <a href='mailto:club@example.com' className='footer__emailLink'>Email Us</a>
          </div>
        </nav>

        <div className='footer__social' aria-label='Social links'>
          <h4>Connect</h4>
          <ul>
            <li>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <img src={instagram} alt='' />
              </a>
            </li>
            <li>
              <a href='https://tiktok.com' target='_blank' rel='noopener noreferrer' aria-label='TikTok'>
                <img src={tiktok} alt='' />
              </a>
            </li>
            <li>
              <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' aria-label='YouTube'>
                <img src={youtube} alt='' />
              </a>
            </li>
            <li>
              <a href='mailto:club@example.com' aria-label='Email'>
                <img src={envelope} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer__bottom'>
        <p>© {year} MSP-MIU Tech Club. All rights reserved.</p>
        <p className='footer__built'>Built with passion by the MSP-MIU community.</p>
      </div>
    </footer>
  );
};

export default Footer;