import './style.css'
import './style.mobile.css'
import { useState , useRef, useEffect } from 'react'

function CasesCard ({ firm_name, date, selected, id, setSelected, niche }) {
	
	const targetRef = useRef(null)	

	function handleClick() {
		if (selected == id) { 
			return;
		}

		setSelected(id)
	}


	useEffect(() => {
		const cases = document.querySelector('.main-cases')

		if (!cases) return;

		function handleClick (e) {
			
			if (!e.target) return;

			if (!targetRef.current.contains(e.target)) {
				setSelected(null)
			}
			return;
		}

		cases.addEventListener('pointerdown', handleClick)

		return() => cases.removeEventListener('pointerdown', handleClick)
	}, [])

	return (
		<div ref={targetRef} className={selected == id ? 'main-cases-card main-cases-card-2' : 'main-cases-card'} onClick={handleClick}>
			<span>{date || '2022' }</span>

			{
				selected == id ?
				<div className='main-cases-card-name'> { firm_name } </div>
				:
				''
			}

			<div className={selected == id ? 'main-cases-card-cnt type2' : 'main-cases-card-cnt'}>
				{
					selected == id
					?
					<>
						<div className='main-cases-card-img'></div>
						<button className='main-cases-card-btn'>
							Explore more
						</button>

						<div className='main-cases-card-info'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet.
						</div>
					</>
					:
					<>
						<div className='main-cases-card-icon'>↗</div>
						<div className='main-cases-card-name-big'> <span> {firm_name} </span> </div>
						<div className='main-cases-card-niche'>{niche || 'eCommerce'}</div>
					</>
				}
			</div>
		</div>
	)
}

export function Cases () {

	const [ selected, setSelected ] = useState(null);

	return (
		<div className='main-cases'>
			<div className='main-cases-hdr'>
				<div>Cases We Have <br /> Worked On</div>

				<div>We work closely with our clients to uncover insights, challange assumptions, and push the boundaries of what's possible.</div>
			</div>

			<div className='main-cases-cnt'>
				<CasesCard id={0} setSelected={setSelected} selected={selected} firm_name='Firm1' />
				<CasesCard id={1} setSelected={setSelected} selected={selected} firm_name='Firm2' />
				<CasesCard id={2} setSelected={setSelected} selected={selected} firm_name='Firm3' />
				<CasesCard id={3} setSelected={setSelected} selected={selected} firm_name='Firm4' />
				<CasesCard id={4} setSelected={setSelected} selected={selected} firm_name='Firm5' />
			</div>
		</div>
	)
}