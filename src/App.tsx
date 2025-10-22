import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context/app.provider";
import Articles from "./pages/Articles";
import CreateArticle from "./pages/CreateArticle";

const App = () => {
	return (
		<BrowserRouter>
			<AppProvider>
				<Routes>
					<Route path="/" element={<Articles />} />
					<Route path="/create" element={<CreateArticle />} />
				</Routes>
			</AppProvider>
		</BrowserRouter>
	);
};

export default App;
