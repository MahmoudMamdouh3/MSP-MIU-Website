import 'animate.css';
import './navbar.css';
import MSPlogo from '/assets/MSP_LOGO_transperant.png';
import instalogo from '/assets/icons/instagram-logo.svg';
import tiktoklogo from '/assets/icons/tiktok-logo.svg';
import youtubelogo from '/assets/icons/youtube-logo.svg';
import envelope from '/assets/icons/envelope.svg';
import openenvelope from '/assets/icons/open-envelope.svg';

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <div className='leftnav'>
                    <div className='logo'>
                        <div className='animate__animated animate__fadeIn'>
                            <img src={MSPlogo} alt="MSP Logo" />
                        </div>
                    </div>
                </div>


                <div className='rightnav'>
                    <div className='rightnav-links'>
                        <div className=''>
                            <img src={instalogo} alt="Instagram Logo" />
                            <span>Instagram</span>
                        </div>
                        <div className=''>
                            <img src={tiktoklogo} alt="Tiktok Logo" />
                            <span>Tiktok</span>
                        </div>
                        <div className=''>
                            <img src={youtubelogo} alt="Youtube Logo" />
                            <span>Youtube</span>
                        </div>
                        <div className=''>
                            <img src={envelope} alt="Contact Logo" />
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar