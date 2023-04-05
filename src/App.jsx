import Menu from "./components/Menu"
import "./index.css"

function App() {
	return (
		<div className="container bg-emerald-200 grid mx-auto w-screen desktop:grid-cols-4 tablet:grid-cols-2 tablet:place-items-center mobile:grid-cols-1 mobile:place-items-center">
			<Menu />
			<h1 className="text-3xl font-bold underline">Hello Room LP !!!</h1>
		</div>
	)
}

export default App
