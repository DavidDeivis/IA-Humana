import React from 'react'
import Story from '../story/story'
import Historia from '../story/textStory'

const introduccion = (props) => {

	return (
		<div id="Intro">
			<Story text={Historia[0]} />
		</div>
	)
}

export default introduccion