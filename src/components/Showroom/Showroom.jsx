import React, { useState } from "react"

const data = [
	{
		id: 1,
		title: "Discover innovative ways to decorate",
		desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
		mobile: "./images/mobile-image-hero-1.jpg",
		desktop: "./images/desktop-image-hero-1.jpg",
	},
]

export default function Showroom() {
	const [itens] = useState(data)

	return (
		<>
			<h1>Showroom</h1>
		</>
	)
}
