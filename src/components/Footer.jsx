import React from 'react';
function Footer() {
  return (
    <footer className="footer">
      <div className='footer-contents'>
        <div className='footer-text'>
          <h1>
            <ul className='footer-text-list'>
              <li className='first-part'>We collaborate with</li>
              <li className='second-part'>many companies and universities</li>
            </ul>
          </h1>
          <div className='collaborators'>
            <img src="https://news.illinois.edu/files/6367/543635/116641.jpg" alt="illions" />
            <img src="https://cdn.vox-cdn.com/thumbor/2ECtQus43_-tjqtlxy0WE8peSEQ=/0x0:2012x1341/1400x1050/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg" alt="google" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvoop2tWSaSJ7FgDVmQVWYpGtZi5Dv3qLfw&s" alt="duke-university" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykQ1TLAymj4cY8J0tL5me8FQXeOEGtVmGpw&s" alt="ibm" />
            <img src="https://logowik.com/content/uploads/images/imperial-college-london5190.jpg" alt="imperial college london" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;