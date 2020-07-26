import React from 'react';
import { Link } from 'react-router-dom';

import { baseURL } from './config';

/**
 * App bar: consisting the logo and some menu buttons
 */
function AppBar() {
	return (
		<div className='appbar'>
			<div className='appbar-logo'>SlideChat</div>
			<div>
				<span className='appbar-item'>Notification</span>
				{/* <a className="appbar-item" href={`${baseURL}/prof`}>
					My Courses
				</a> */}
				<Link className='appbar-item' to={`${baseURL}/logout`}>
					Logout
				</Link>
			</div>
		</div>
	);
}

export default AppBar;
