import React from "react"
import logo from "/src/assets/images/logo.svg"
import menu from "/src/assets/images/icon-hamburger.svg"
import close from "/src/assets/images/icon-close.svg"

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<header>
				<div>
					<img src={logo} alt="room logo" className="lg:mr-8" />
				</div>

				<div
					className={`${
						isOpen
							? "bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen"
							: "bg-transparent lg:bg-transparent"
					} lg:bg-transparent lg:h-auto lg:relative`}
				></div>
			</header>
		</>
	)
}
