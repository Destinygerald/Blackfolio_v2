import './style.css'
import './style.mobile.css'
import Logo from '/logo2.png'

export function Footer () {
	return (
		<div className='footer'>
			<div className='footer-icon'>
				<div> <img src={Logo} /> </div>

				<div></div>
			</div>

			<div className='footer-cnt'>
				<div>
					<span>Navigation</span>
					<span>About</span>
					<span>Services</span>
					<span>Cases</span>
					<span>Advantage</span>
				</div>

				<div>
					<span>Contact Us</span>
					<span>+234 801 234 5678</span>
					<span>Linked</span>
					<span>Email</span>
					<span>Instagram</span>
					<span>Twitter</span>
				</div>

			</div>

			<div className='footer-subscribe'>
				<span>Get Latest Info</span>

				<div>
					<input type='email' placeholder='Email Address' />
					<div> {'>'} </div>
				</div>
			</div>


			<div className='footer-copyright'>
				Copyright©2024 BlackFolio. All Rights Reserved
			</div>
		</div>
	)
}