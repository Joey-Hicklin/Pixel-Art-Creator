import React from 'react';

export default class Pixel extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			active: false,
			activeColor: null
		};
	}

	stylePixel(){
		const { active, activeColor } = this.state;
		const pixelStyle = { border: active ? '1px solid rgba(0,0,0,1)' : ''};
		return(pixelStyle)
	}

	handleClick(){
		if(menu.state.display === "none"){
			let changeActive = !this.state.active;
			this.setState({
				active: changeActive
			});
		} else {
			menu.setState({
				display: "none"
			});
		}
	}

	handleContextMenu(e){

		const that = this;
		const navElement = document.getElementsByTagName("nav")[0];
		navElement.addEventListener("click", navListen);
		document.addEventListener("click", pageListen);
		document.addEventListener("contextmenu", contextListen);

		function navListen(e){
			const selectedColor = e.target.innerHTML.replace(" ", "_");

			if (that.state.activeColor === selectedColor){
				that.setState({
					activeColor: null
				});
			} else {
				that.setState({
					activeColor: selectedColor
				});
			}
			that.handleClick();
			removeListeners();
		}

		function pageListen(e){
			if (e.target != navElement && !navElement.contains(e.target) ){
				removeListeners();
			}
		}

		function contextListen(e){
			removeListeners();
		}

		function removeListeners(){
			navElement.removeEventListener("click", navListen);
			document.removeEventListener("click", pageListen);
			document.removeEventListener("contextmenu", contextListen);
		}
	}	

	render(){
		const {activeColor} = this.state;

	    return (
	    	<div className={ activeColor ? "pixel "+activeColor : "pixel" }
	    	style={this.stylePixel()}
	    	onClick={this.handleClick.bind(this)}
	    	onContextMenu={this.handleContextMenu.bind(this)}
	    	/>
    	);
	}
}