import './style.css'
import './style.mobile.css'

import Image from '/images/img5.webp'

function ExtraInfo ({ top, btm }) {
	return (
		<div className='main-banner-extra-info'>
			<span>{top}</span>
			<span>{btm}</span>
		</div>
	)
}

export function PageBanner () {
	return (
		<div className='main-banner'>
			<div className='main-banner-top'>
				<span>BlackFolio: Your  Design<br /> Studio of Choice</span>
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet</span>
			</div>

			<div className='main-banner-btm'>
				<div className='main-banner-extra'>
					<ExtraInfo top='100%' btm='Satisfaction' />
					<ExtraInfo top='Affordable' btm='Pricing' />
					<ExtraInfo top='Unique' btm='Designs' />
					{/*<ExtraInfo top='100%' btm='Satisfaction' />*/}
					<ExtraInfo top='24/7' btm='Services' />
				</div>

				<div className='main-banner-img'>
					<img src={Image} />
				</div>
			</div>
		</div>
	)
}
