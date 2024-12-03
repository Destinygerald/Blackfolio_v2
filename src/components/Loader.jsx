import './style.css'
import Building from '/images/building.webp'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const bckVariants = {
	initial: {
		y: `-100%`
	},

	animate: {
		y: 0
	},

	exit: {
		y: `-100%`,
		transition: {
			duration: .6
		}
	}
}


const screen1 = {
	initial: {
		top: `-65%`
	},

	animate: {
		top: `-100%`,
		transition: {
			duration: 1.2,
			delay: 2.8
		}
	}	
}

const screen2 = {
	initial: {
		left: `-65%`
	},

	animate: {
		left: `-100%`,
		transition: {
			duration: 1.2,
			delay: 2.8
		}
	}	
}

const screen3 = {
	initial: {
		right: `-65%`
	},

	animate: {
		right: `-100%`,
		transition: {
			duration: 1.2,
			delay: 2.8
		}
	}	
}

const screen4 = {
	initial: {
		bottom: `-65%`
	},

	animate: {
		bottom: `-100%`,
		transition: {
			duration: 1.2,
			delay: 2.8
		}
	}	
}

export function Loader ({ loaded }) {

	const [ loadState, setLoadState ] = useState(0)

	return (
		<AnimatePresence>
		{
			!loaded
			&&
			<LoaderCnt />
		}
		</AnimatePresence>
	)
}


function LoaderCnt ({ }) {
	return (
		<motion.div className='page-loader' initial='initial' animate='animate' exit='exit' variants={bckVariants}>
			<div className='page-loader-img'>
				<img src={Building} />
			</div>

			<div className='page-loader-screen'>
				<motion.div initial='initial' animate='animate' variants={screen1} />
				<motion.div initial='initial' animate='animate' variants={screen2} />
				<motion.div initial='initial' animate='animate' variants={screen3} />
				<motion.div initial='initial' animate='animate' variants={screen4} />
			</div>


			<div className='page-loader-text'>
				<span>BLACK</span>

				<span>FOLIO</span>
			</div>


		</motion.div>
	)
}