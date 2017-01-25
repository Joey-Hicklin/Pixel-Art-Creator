import React from 'react';
import colors from './contextMenu';


export default class ContextMenuItem extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<li className='contextColor'>
			{this.props.children}
			</li>
		);
	}
}