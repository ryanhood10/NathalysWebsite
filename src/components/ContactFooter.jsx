import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




function Footer() {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500">
     
      <div className='lg:col-span-3 flex justify-between space-x-10'>
            <div>
            <h1 className='w-full text-3xl font-bold text-purple-400'> Contact</h1>
            {/* <p className='py-4'>Connect with us on LinkedIn or Send me an email!</p>
          <nav>
            <ul className="flex justify-between md:w-[75%] my-6">
            <li>
                <Link to="https://www.linkedin.com/company/seaver-marketing-group/about/">
              <FontAwesomeIcon icon={faLinkedin}  size={30} />
                </Link>
              </li>
               <li>
                <Link to="/Contact">
                  <FontAwesomeIcon icon={faEnvelope} size={30} />
                </Link>
              </li>
            </ul>
          </nav> */}

            <div>
                <h4> Email: example@email.com </h4>
                <h4> or </h4>
                <h4> Connect with me on LinkedIn!   <FontAwesomeIcon icon={faLinkedin} size={30} /></h4>
            </div>
      </div>

      <div className='lg:col-span-3 flex justify-between'>
        <div>
        <h3 className="text-[#00df9a] text-xl font-bold">
                        Solutions
                      </h3>
          <ul>
            <li className='py-2 text-sm'>Social Media Marketing Campaigns</li>
            <li className='py-2 text-sm'>Email Marketing Campaigns</li>
            <li className='py-2 text-sm'>Search Engine Optimization</li>
            <li className='py-2 text-sm'>Website Customization</li>
          </ul>
        </div>

      </div>
      </div>
    </footer>
  );
}

export default Footer;