import React from 'react';
import {  BsInstagram ,BsLinkedin} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      
<BsLinkedin />
    
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;