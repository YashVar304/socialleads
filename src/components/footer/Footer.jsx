import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto text-center'>
        <p>&copy; 2024 SocialLeads. All rights reserved.</p>
        <div className='flex justify-center mt-4'>
          <a href='#' className='mx-2 hover:text-gray-400'>About</a>
          <a href='#' className='mx-2 hover:text-gray-400'>Services</a>
          <a href='#' className='mx-2 hover:text-gray-400'>Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
