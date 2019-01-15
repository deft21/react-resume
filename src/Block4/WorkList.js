import React from 'react'
import Work from './Work.js'

export default function WorkList ({place}) {
	const placelElements = place.map((place, index) =>
		<li key = {place.id}><Work place = {place} defaultOpen = {index ===0}/></li>
		)
	return (
		<ul>
			{placelElements}
		</ul>
	)
}