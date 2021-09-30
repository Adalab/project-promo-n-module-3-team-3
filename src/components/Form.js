import '../styles/components/form.scss';
import FormDesign from './FormDesign';
import FormShare from './FormShare';
import FormFill from './FormFill';
import { useState } from 'react';

const Form = (props) => {
	//pendiente coger los props de App.js
	const handleSubmit = (ev) => {
		ev.preventDefault();
	};
	const [collapsableDesign, setCollapsableDesign] = useState('');
	const [collapsableFill, setCollapsableFill] = useState('hidden');
	const [collapsableShare, setCollapsableShare] = useState('hidden');
	const [arrow, setArrow] = useState('fa-chevron-up');
	const [arrow2, setArrow2] = useState('fa-chevron-down');
	const [arrow3, setArrow3] = useState('fa-chevron-down');

	const handlerCollapsableDesign = () => {
		if (collapsableDesign === 'hidden') {
			setCollapsableDesign('');
			setArrow('fa-chevron-up');
		} else {
			setCollapsableDesign('hidden');
			setArrow('fa-chevron-down');
			setCollapsableFill('');
			setArrow2('fa-chevron-up');
		}

		setCollapsableShare('hidden');
		setArrow3('fa-chevron-down');
	};

	const handlerCollapsableFill = () => {
		if (collapsableFill === 'hidden') {
			setCollapsableFill('');
			setArrow2('fa-chevron-up');
		} else {
			setCollapsableFill('hidden');
			setArrow2('fa-chevron-down');
			setCollapsableShare('');
			setArrow3('fa-chevron-up');
		}
		setCollapsableDesign('hidden');
		setArrow('fa-chevron-down');
	};

	const handlerCollapsableShare = () => {
		if (collapsableShare === 'hidden') {
			setCollapsableShare('');
			setArrow3('fa-chevron-up');
		} else {
			setCollapsableShare('hidden');
			setArrow3('fa-chevron-down');
		}
		setCollapsableDesign('hidden');
		setCollapsableFill('hidden');
		setArrow('fa-chevron-down');
		setArrow2('fa-chevron-down');
	};

	return (
		<section className="section_form">
			<form onSubmit={handleSubmit} action="#" className="form js_form">
				<FormDesign
					handlerCollapsableDesign={handlerCollapsableDesign}
					arrow={arrow}
					collapsableDesign={collapsableDesign}
					handleInput={props.handleInput}
				/>
				<FormFill
					handlerCollapsableFill={handlerCollapsableFill}
					arrow2={arrow2}
					collapsableFill={collapsableFill}
					handleInput={props.handleInput}
					data={props.data}
				/>

				<FormShare
					handlerCollapsableShare={handlerCollapsableShare}
					arrow3={arrow3}
					collapsableShare={collapsableShare}
				/>
			</form>
		</section>
	);
};

export default Form;
