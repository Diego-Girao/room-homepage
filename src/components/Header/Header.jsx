import React from "react"
import logo from "/src/assets/images/logo.svg"
import menu from "/src/assets/images/icon-hamburger.svg"
import close from "/src/assets/images/icon-close.svg"

export default function Header() {
	// const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<header className="absolute z-10 p-8 w-full flex items-start justify-start">
				<div>
					<img src={logo} alt="room logo" />
				</div>

				<nav></nav>

				<div>
					<button>
						<img src={menu} alt="hamburger menu" />
					</button>
				</div>

				{/* <div
					className={`${
						isOpen
							? "bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen"
							: "bg-transparent lg:bg-transparent"
					} lg:bg-transparent lg:h-auto lg:relative`}
				></div> */}
			</header>
		</>
	)
}
