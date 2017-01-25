import React from 'react';
import ContextMenuItem from './contextMenuItem';

export const colors = [' BLUE ', ' RED ', ' YELLOW ', ' GREEN ', ' PURPLE ', ' ORANGE ', ' BROWN ', ' WHITE ', ' LIGHT GREY ', ' MED GREY ', ' DARK GREY ', ' BLACK ', ' FLESH ', ' SKY '];
const colorsElements = [];

for (var i = 0; i < colors.length; i++) {
	colorsElements.push(<ContextMenuItem color={colors[i]} key={i}> {colors[i]} </ContextMenuItem>);
}

export default class ContextMenu extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			display: "none",
			left: 0,
			top: 0
		}
	}

	styleMenu(){
		window.menu = this;
		const { display, left, top } = this.state;
		const contextMenuStyle = {
			display: display,
			left: left,
			top: top
		}
		return(contextMenuStyle);
	}

	render(){
		return(
			<nav id='contextMenu' style={this.styleMenu()}>
				<ul>
					{colorsElements}
				</ul>
			</nav>
		)
	}
}

document.addEventListener("contextmenu", function(e){
	e.preventDefault();
	
	window.eventTarget = e.target;
	let contextX = e.screenX-1;
	let contextY = e.screenY-89;

	if(e.screenX > window.innerWidth-150){
		contextX -= 140;
	}
	if(e.screenY > window.innerHeight-217){
		contextY -= 286;
	}

  	menu.setState({
  		display: 'block',
  		left: contextX,	
  		top: contextY
	});
});