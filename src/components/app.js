import React from 'react';
import Pixel from './pixel';
import ContextMenu from './contextMenu';


let pixelCount = ((window.outerHeight-89)*window.outerWidth)/400;
let pixelContainer = [];
console.log(ContextMenu.state.display);

for (var i = 0; i < pixelCount; i++) {
	pixelContainer.push(<Pixel key={i} />);
}
export default class App extends React.Component{
	render(){
		return (
			<div className="canvas">
				{pixelContainer}
				<ContextMenu />
			</div>
		)
	}
}