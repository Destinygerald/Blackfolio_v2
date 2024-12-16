import './style.css'
import './style.mobile.css'
import { useState } from 'react'
import { LuTarget } from 'react-icons/lu'
import { FaMoneyBill } from 'react-icons/fa'
import { IoColorPaletteSharp } from 'react-icons/io5'

const AdvantagesCardInfo = [
	{
		icon: <LuTarget />,
		title: 'Accuracy and Consistency',
		little_content: 'We Provide Accurate designs that suits each clients demand with no stones left unturned.',
		content: " We pride ourselves on our atention to detail and commitment to delivering high-quality solutions. Our team of expert ensures that every project is executed with precision and care, resulting in accurate and consistent results. "
	},
	{
		icon: <FaMoneyBill />,
		title: 'Cost Saving',
		little_content: 'Get Satisfactory designs at reasonable and negotiatable prices. We consider every clients budget.',
		content: "We understand that every business has a budget to work with. That's why we offer cost-effective solutions that deliver exceptional value without breaking the bank. Our efficient processes and expertise enables us to complete projects on time and within budget, saving our clients' money and resources."
	},
	{
		icon: <IoColorPaletteSharp />,
		title: 'Personalization',
		little_content: 'Our creatives work alongside clients request, considering each and every of a client\'s idea. ',
		content: "We believe that every business is unique, and that's why we offer personlized solution tailored to our clients' specific needs. Our team takes the time to understand our clients' goals, target audience and brand identity, ensuring that every solution we deliver is customized to meet their individual requirements."
	}
]

function AdvantagesCard ({ icon, title, little_content, content }) {

	const [ deg, setDeg ] = useState(0)

	function handleClick () {
		if (deg == 0) {
			setDeg(1) 
		} else {
			setDeg(0)
		}
	}

	return (
		<div className='advantages-cnt-card' style={{ transform: `rotateY(${ deg * 180 }deg)` }} onClick={handleClick}>
			<div className='advantages-cnt-card-front'>
				<div>{icon}</div>
				<span>{title}</span>
				<span>{little_content}</span>
			</div>
			<div className='advantages-cnt-card-back'>{content}</div>
		</div>
	)
}

export function Advantages () {

	return (
		<div className='advantages' id='advantages'>
			<div className='advantages-hdr'>
				<span>What BlackFolio Can <br />  Do For You</span>

				<span>We are dedicated to delivering exceptional results that exceed our client's expectations.</span>
			</div>

			<div className='advantages-cnt'>
				{
					AdvantagesCardInfo.map((info, i) => (
						<AdvantagesCard key={i} icon={info.icon} title={info.title} content={info.content} little_content={info.little_content} />
					))
				}
			</div>
		</div>
	)
}