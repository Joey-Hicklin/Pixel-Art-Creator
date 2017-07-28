import React from 'react';
import Pixel from './pixel';
import ContextMenu from './contextMenu';


let pixelCount = ((window.outerHeight-89)*window.outerWidth)/400;
const makingSure = prompt("Do you really want to create " + pixelCount + " div elements?");
let pixelContainer = [];
console.log(ContextMenu.state.display);

if(makingSure != null){
	for (var i = 0; i < pixelCount; i++) {
		pixelContainer.push(<Pixel key={i} />);
	}
}
export default class App extends React.Component{
	render(){
		return (
			<div>
				{pixelContainer}
				<ContextMenu />
			</div>
		)
	}
}