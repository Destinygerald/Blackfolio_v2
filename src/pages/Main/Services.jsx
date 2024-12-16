import './style.css'
import './style.mobile.css'
import { useState } from 'react'
import img1 from '/images/img1.webp'
import img2 from '/images/img2.webp'
import img3 from '/images/img3.webp'
import img4 from '/images/img4.webp'


function PageServicesBox ({ ...info }) {
	return (
		<div className='main-services-box' style={{ transform: `rotateX(${info.deg * 90 }deg)` }}>
			<div className='main-services-box-side-1'>
				<span>{info.first_icon}</span>

				<span>{info.first_header}</span>

				<span>{info.first_desc}</span>
			</div>	

			<div className='main-services-box-side-2'>
				<span>{info.second_icon}</span>

				<span>{info.second_header}</span>

				<span>{info.second_desc}</span>
			</div>

			<div className='main-services-box-side-3'>
				<span>{info.third_icon}</span>

				<span>{info.third_header}</span>

				<span>{info.third_desc}</span>
			</div>

			<div className='main-services-box-side-4'>
				<span>{info.fourth_icon}</span>

				<span>{info.fourth_header}</span>

				<span>{info.fourth_desc}</span>
			</div>
		</div>
	)
}


function PageServicesBox2 ({...info}) {
	return (
		<div className='main-services-box-2' style={{ transform: `rotateX(${-(info.deg * 90 )}deg)` }}>
			<div className='main-services-box-side-1'> <img src={img1} /> </div>
			<div className='main-services-box-side-2'> <img src={img2} /> </div>
			<div className='main-services-box-side-3'> <img src={img3} /> </div>
			<div className='main-services-box-side-4'> <img src={img4} /> </div>
		</div>
	)
}

export function PageServices () {

	const [ deg, setDeg ] = useState(0)

	function rotateFront () {
		setDeg(deg => deg + 1)
	}

	function rotateBack () {
		// if (deg <= 0) return
		setDeg(deg => deg - 1)
	}

	return (
		<div className='main-services' id='services'>
			<div className='main-services-top'>
				<span>What BlackFolio Can <br />  Do For You</span>

				<span>We offer technological design services with consideration of our clients need. Our approach is centered around empathy, creativity and collaboration.</span>
			</div>

			<div className='main-services-cnt'>
				<div></div>

				<div className='main-services-cnt-info'>
					<div>
						<PageServicesBox deg={deg} first_icon={1} first_header='Graphic Design' first_desc='Graphic Design' second_icon={2} second_header='Motion Design' second_desc='Motion Design' third_icon={3} third_header='Brand Design' third_desc='Brand Design' fourth_icon={4} fourth_header='Copy Writing' fourth_desc='Copy Writing'/>
					</div>

					<div>
						<PageServicesBox2 deg={deg} />
					</div>
				</div>

				<div className='main-services-arrow'>
					<span onClick={rotateFront}>{'<'}</span>
					<span onClick={rotateBack}>{'>'}</span>
				</div>
			</div>
		</div>
	)
}
