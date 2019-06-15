import React from 'react';
import './App.css';

class ResultDisplay extends React.Component {
	state = { textInput: '' };

	handleChange = e => {
		const val = e.target.value;
		const computedVal = val.substring(val.length - 1, val.length);
		if (!isNaN(parseInt(val))) {
			if (
				(this.props.val.indexOf('0') === 0 &&
					this.props.val.length === 1 &&
					computedVal === '0') ||
				(this.props.val.indexOf('.') !== -1 && computedVal === '.')
			)
				return;
			if (!isNaN(parseInt(computedVal)) || computedVal === '.')
				this.props.update(computedVal);
		}
	};

	render() {
		return (
			<div>
				<input
					type="text"
					onChange={e => {
						this.handleChange(e);
					}}
					className="inputBox"
					value={this.props.val}
				/>
			</div>
		);
	}
}

export default ResultDisplay;
