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
		content: ''
	},
	{
		icon: <FaMoneyBill />,
		title: 'Cost Saving',
		little_content: 'Get Satisfactory designs at reasonable and negotiatable prices. We consider every clients budget.',
		content: ''
	},
	{
		icon: <IoColorPaletteSharp />,
		title: 'Personalization',
		little_content: 'Our creatives work alongside clients request, considering each and every of a client\'s idea. ',
		content: ''
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
			<div className='advantages-cnt-card-back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet.</div>
		</div>
	)
}

export function Advantages () {

	return (
		<div className='advantages'>
			<div className='advantages-hdr'>
				<span>What BlackFolio Can <br />  Do For You</span>

				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet.</span>
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