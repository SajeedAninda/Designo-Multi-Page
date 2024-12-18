import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import TalkProject from '../Homepage/TalkProject/TalkProject'
import logo from '../../assets/shared/desktop/logo-light.png'
import fbIcon from '../../assets/shared/desktop/icon-facebook.svg'
import instaIcon from '../../assets/shared/desktop/icon-instagram.svg'
import twitterIcon from '../../assets/shared/desktop/icon-twitter.svg'
import pinterestIcon from '../../assets/shared/desktop/icon-pinterest.svg'
import ytIcon from '../../assets/shared/desktop/icon-youtube.svg'

const Footer = () => {
  const location = useLocation()

  const showTalkProject = location.pathname !== '/contact'

  return (
    <div className='relative'>
      {showTalkProject && <TalkProject />}
      <footer className='bg-[#1c1b1d] w-full pt-40 pb-20'>
        <div className='w-full lg:w-[1000px] mx-auto'>
          <div className='upperDiv pb-8 border-b-2 border-[#2f2f30] flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center'>
            <Link to={'/'} className='logoDiv'>
              <img className='w-[200px]' src={logo} alt='Logo' />
            </Link>

            <div className='linkDiv uppercase flex items-center gap-10 text-white tracking-wider text-[15px]'>
              <Link
                to={'/aboutCompany'}
                className='div hover:underline cursor-pointer'
              >
                Our Company
              </Link>
              <Link
                to={'/locations'}
                className='div hover:underline cursor-pointer'
              >
                Locations
              </Link>
              <Link
                to={'/contact'}
                className='div hover:underline cursor-pointer'
              >
                Contact
              </Link>
            </div>
          </div>

          <div className='lowerDiv grid grid-cols-1 lg:grid-cols-3 pt-8 text-center lg:text-left gap-8'>
            <div className='text-[#828283] font-semibold space-y-1'>
              <p className='font-bold'>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>

            <div className='text-[#828283] font-semibold space-y-1'>
              <p className='font-bold'>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>

            <div className='iconDiv flex justify-center items-center gap-4 lg:justify-end'>
              <img src={fbIcon} alt='Facebook' />
              <img src={ytIcon} alt='YouTube' />
              <img src={twitterIcon} alt='Twitter' />
              <img src={pinterestIcon} alt='Pinterest' />
              <img src={instaIcon} alt='Instagram' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
