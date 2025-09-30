import React from 'react'
import NavBar from '../components/NavBar'
import profile from '../assets/Ellipse 1.png'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'


export default function Home() {
  const hc = { color: 'yellow' }
  const ac = { color: 'white' }
  const pc = { color: 'white' }
  const cc = { color: 'white' }
  return (
    <>

      <NavBar hc={hc}/>

      <div className='flex items-center justify-center mr-20 mt-20'>

        {/* ทางซ้าย */}
        <div className='text-white mr-20'>
        <h1 style={{fontFamily: 'Lora'}} className='text-4xl'>
          Frontend Web
          <br />
          Developer !
        </h1>
          <br />
          <span>
            Hi, I'm NiniN SAU, A passionate Front-end
          </span>
          <br />
          <span>
            Web Develop based in Thailand
          </span>
          <br />

          <div className='flex mt-20'>
            <FaLinkedinIn size={30}/>
            <FaGithub size={30} />
          </div>

        </div>
          {/* ทางขวาง */}

        <div className='ml-30'>
        <img className='w-50' src={profile} alt="profile" />
        </div>

      </div>

      <div className='flex justify-center mt-20 mb-20'>
        <img className="w-8 mx-4" src={img1} alt="img1" />
        <img className="w-8 mx-4" src={img2} alt="img2" />
        <img className="w-8 mx-4" src={img3} alt="img3" />
        <img className="w-8 mx-4" src={img4} alt="img4" />
        <img className="w-8 mx-4" src={img5} alt="img5" />
        <img className="w-8 mx-4" src={img6} alt="img6" />
        <img className="w-8 mx-4" src={img7} alt="img7" />
        <img className="w-8 mx-4" src={img8} alt="img8" />
        <img className="w-8 mx-4" src={img9} alt="img9" />
      </div>

    </>
  )
}
