import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectsRoute from "./ProjectsRoute";
import Header from "./components/Header";
import Contact from "./components/Contact";


function App() {
	return (
		<BrowserRouter>
			<main className="md:px-[50px]">
				<Header />

				<Routes>
					<Route
						exact
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/projects"
						element={<ProjectsRoute />}
					/>
				</Routes>
				<Contact />
			</main>
		</BrowserRouter>
	);
}

export default App;
