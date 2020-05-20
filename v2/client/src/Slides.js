import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './App.scss';

/**
 * Slides on the left of the screen
 */
class Slides extends React.Component {
	render() {
		let nextBtnDisable = this.props.pageNum === this.props.pageTotal;
		let prevBtnDisable = this.props.pageNum === 1;

		return (
			<div className="slide-container">
				<div>
					<img src={this.props.pageImg} alt="slide" className="slide"/>
				</div>
				<Button variant="contained" disabled={prevBtnDisable} onClick={this.props.prevPage}>PREV</Button>
				<Button variant="contained" disabled={nextBtnDisable} onClick={this.props.nextPage}>NEXT</Button>
				<Typography>Page {this.props.pageNum} of {this.props.pageTotal}</Typography>
			</div>
		);
	}
}

export default Slides;