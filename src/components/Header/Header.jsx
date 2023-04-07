import React, { useState } from "react"
import logo from "/src/assets/images/logo.svg"
import menu from "/src/assets/images/icon-hamburger.svg"
import close from "/src/assets/images/icon-close.svg"

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<header className="absolute z-10 p-8 w-full flex items-center justify-center">
				<div>
					<img src={logo} alt="room logo" />
				</div>
				<div
					className={`${
						isOpen
							? "bg-black opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen"
							: "bg-transparent lg:bg-transparent"
					}lg:bg-transparent lg:h-auto lg:relative`}
				>
					<nav className={`${isOpen ? "open w-full py-8" : ""}`}>
						<ul className="flex items-center justify-center flex-wrap gap-5">
							<li>
								<button className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-300">
									home
								</button>
							</li>
							<li>
								<button className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-300">
									shop
								</button>
							</li>
							<li>
								<button className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-300">
									about
								</button>
							</li>
							<li>
								<button className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-300">
									contact
								</button>
							</li>
						</ul>
					</nav>
				</div>
				<div className="absolute left-8 top-8 z-20">
					{isOpen ? (
						<button onClick={() => setIsOpen(false)}>
							<img src={close} alt="" />
						</button>
					) : (
						<button onClick={() => setIsOpen(true)}>
							<img src={menu} alt="" />
						</button>
					)}
				</div>
			</header>
		</>
	)
}
