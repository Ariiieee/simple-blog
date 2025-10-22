import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context/app.provider";
import Articles from "./pages/Articles";
import CreateArticle from "./pages/CreateArticle";
import ArticleDetail from "./pages/ArticleDetail";
import EditArticle from "./pages/EditArticle";

const App = () => {
	return (
		<BrowserRouter>
			<AppProvider>
				<Routes>
					<Route path="/" element={<Articles />} />
					<Route path="/create" element={<CreateArticle />} />
					<Route path="/article/:id" element={<ArticleDetail />} />
					<Route path="/edit/:id" element={<EditArticle />} />
				</Routes>
			</AppProvider>
		</BrowserRouter>
	);
};

export default App;
