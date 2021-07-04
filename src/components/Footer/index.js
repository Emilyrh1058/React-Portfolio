import React from 'react';
import gitHub from '../../assets/images/icons/github-icon.png'
import linkedIn from '../../assets/images/icons/linkedin-icon.png'
import stack from '../../assets/images/icons/stack-icon.png'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='row justify-content-center'>
        <div className='col col-sm-2 col-lg-2'><a href='https://github.com/Emilyrh1058' target='blank'><img src={gitHub} className='img-link-social' alt='GitHub logo'/></a></div>
        <div className='col col-sm-2 col-lg-2'><a href='https://www.linkedin.com/in/emilyrsalinas/'  target='blank'><img src={linkedIn} className='img-link-social' alt='LinkedIn logo'/></a></div>
        <div className='col col-sm-2 col-lg-2'><a href='https://stackoverflow.com/users/15046513/emily-salinas?tab=profile' target='blank'><img src={stack} className='img-link-social' alt='logo'/></a></div>
      </div>
    </section>
  )
}

export default Footer;