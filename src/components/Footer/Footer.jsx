import React from "react"
import aboutDark from "/src/assets/images/image-about-dark.jpg"
import aboutLight from "/src/assets/images/image-about-light.jpg"

export default function Footer() {
	return (
		<>
			<section className="grid grid-cols-1 lg:grid-cols-3">
				<article>
					<img src={aboutDark} alt="" className="w-full" />
				</article>
				<article className="p-8 lg:p-9">
					<h2
						className="font-bold text-2xl lg:text-base uppercase"
						style={{
							letterSpacing: "0.4rem",
						}}
					>
						About our furniture
					</h2>
					<p className="text-slate-900 opacity-75 mt-3 text-sm">
						Our multifunctional collection blends design and function to suit
						your individual taste. Make each room unique, or pick a cohesive
						theme that best express your interests and what inspires you. Find
						the furniture pieces you need, from traditional to contemporary
						styles or anything in between. Product specialists are available to
						help you create your dream space.
					</p>
				</article>

				<article>
					<img src={aboutLight} alt="" className="w-full" />
				</article>
			</section>
		</>
	)
}
