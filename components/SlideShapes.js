import React from "react"
import ReactAddons from "react-addons"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Carousel from 'grommet/components/Carousel';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Pulse from 'grommet/components/icons/Pulse';
import Image from 'grommet/components/Image';
import Spinning from 'grommet/components/icons/Spinning';

class Slide1  extends React.Component {
	carousel = null
	state = {
		loaded: false
	}
  componentDidMount () {
    window.document.addEventListener("keydown", this.keyDown, false);
		const playground = require("../lib/live-editor")
		const exampleCode = require("!raw-loader!./BasicShapes.js")
		this.setState({ ...this.state, exampleCode, playground, loaded: true })
 	}
	componentWillUnmount () {
		window.document.removeEventListener("keydown", this.keyDown, false);
	}
	render () {
		let playground = (<div>Loading playground</div>)

		if(this.state.loaded)
		{
			playground = (<this.state.playground codeText={ this.state.exampleCode } />)
		}
		return (
			<Box>

					<div className="component-documentation">
					  { playground }
		      </div>

			</Box>
		);
	}
}
export default withRouter(Slide1);