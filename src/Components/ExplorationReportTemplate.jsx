import '../assets/css/ExplorationReportTemplate.css';
import triumphLogo from '../assets/images/triumph-motorcycle-logo.jpeg';
import correct from '../assets/images/icons8-correct-80.png';
import incorrect from '../assets/images/icons8-error-80.png';
import { Fragment } from 'react';

export const ExplorationReportTemplate = (props) => {
	const dealerName =
		props.DealerName.Value !== '' ? props.DealerName.Value : 'MAQUINA MOTORS';
	return (
		<div id='page'>
			<div id='table-wrapper'>
				<div id='header'>
					<img src={triumphLogo} alt='triumph motorcycles logo' id='logo' />
					<h1 id='h1'>{props.ReportTitle.Value}</h1>
				</div>
			</div>
			<h2 className='h2'>{props.DealerInfoTitle.Value}</h2>
			<div className='info-grid'>
				<div className='info-cell bold'>{props.DealerName.Param}</div>
				<div className='info-cell'>{dealerName}</div>
				<div className='info-cell bold'>{props.DealerPhone.Param}</div>
				<div className='info-cell'>{props.DealerPhone.Value}</div>
				<div className='info-cell bold'>{props.TechName.Param}</div>
				<div className='info-cell'>{props.TechName.Value}</div>
				<div className='info-cell bold'>{props.DateTime.Param}</div>
				<div className='info-cell'>{props.DateTime.Value}</div>
			</div>
			<h2 className='h2'>{props.MotorcycleInfoTitle.Value}</h2>
			<div className='info-grid'>
				<div className='info-cell bold'>{props.VIN.Param}</div>
				<div className='info-cell'>{props.VIN.Value}</div>
				<div className='info-cell bold'>{props.Reg.Param}</div>
				<div className='info-cell'>{props.Reg.Value}</div>
				<div className='info-cell bold'>{props.Model.Param}</div>
				<div className='info-cell'>{props.Model.Value}</div>
				<div className='info-cell bold'>{props.Odo.Param}</div>
				<div className='info-cell'>{props.Odo.Value}</div>
				<div className='info-cell bold'>{props.Tune.Param}</div>
				<div className='info-cell'>{props.Tune.Value}</div>
				<div className='info-cell bold'></div>
				<div className='info-cell'></div>
			</div>
			<h2 className='h2'>{props.ResultsInfoTitle.Value}</h2>
			<div className='results-grid'>
				{props.AutoscanTest.map((el, i) => (
					<Fragment key={i}>
						<div className='info-cell bold'>
							<span>{el.TestName}</span>
						</div>
						<div className='info-cell bold result'>
							<span>{el.Result}</span>
						</div>
						<div className='info-cell icon'>
							{el.Result === 'Correcto' ? (
								<img className='icon' src={correct} alt='correcto' />
							) : (
								<img className='icon' src={incorrect} alt='incorrecto' />
							)}
						</div>
					</Fragment>
				))}
			</div>
			<h2 className='h2'>{props.TestResult.Param}</h2>
			<div id='result' className='result-footer'>
				<div className='info-cell footer icon'>
					{props.TestResult.Value.toLowerCase() === 'correcto' ? (
						<img className='icon' src={correct} alt='correcto' />
					) : (
						<img className='icon' src={incorrect} alt='incorrecto' />
					)}
				</div>
				<div className='info-cell footer bold'>
					<span>{props.TestResult.Value}</span>
				</div>
				<div className='info-cell footer icon'>
					{props.TestResult.Value.toLowerCase() === 'correcto' ? (
						<img className='icon' src={correct} alt='correcto' />
					) : (
						<img className='icon' src={incorrect} alt='incorrecto' />
					)}
				</div>
			</div>
			<h2 className='h2'>{props.TestNotesTitle.Param}</h2>
			{props.TestNotesTitle.Value === '...' ? (
				<p id='notes' style={{ justifyContent: 'center' }}>
					{props.TestNotesTitle.Value}
				</p>
			) : (
				<p id='notes'>{props.TestNotesTitle.Value}</p>
			)}
		</div>
	);
};
