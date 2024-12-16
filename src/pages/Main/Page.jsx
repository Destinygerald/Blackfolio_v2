import './style.css'
import './style.mobile.css'
import Logo from '/logo2.png'
import { useState } from 'react'
import { Cases } from './Cases.jsx'
import { PageBanner } from './Banner.jsx'
import { PageServices } from './Services.jsx'
import { Advantages } from './Advantages.jsx'
import { Marquee } from './Marquee.jsx'
import { Footer } from './Footer.jsx'

function MainNav () {
	return (
		<div className='main-nav'>
			<div className='nav-logo'>
				<img src={Logo} />
			</div>

			<div className='nav-items'>
				<span>About</span>
				<a href='#services'> <span>Services</span> </a>
				<a href='#cases'> <span>Cases</span> </a>
				<a href='#advantages'> <span>Advantages</span> </a>
			</div>

			<div className='nav-btn'>
				<button>Contact Us</button>
			</div>
		</div>
	)
}


function Page () {
	return (
		<div className='main'>
			<MainNav />
			<PageBanner />
			<PageServices />
			<Cases />
			<Advantages />
			<Marquee />
			<Footer />
		</div>
	)
}

export default Page;