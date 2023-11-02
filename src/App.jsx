import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectsRoute from "./ProjectsRoute";

function App() {
	return (
		<BrowserRouter>
			<main>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/projects" element={<ProjectsRoute />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
