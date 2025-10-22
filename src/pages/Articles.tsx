import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Searchbar from "../components/Searchbar";
// import Header from "../components/Header";
import useAppContext from "../context/app.context";

const Articles = () => {
	const { filteredArticles, loading } = useAppContext();

	return (
		<div>
			{/* <Header /> */}
			<div
				style={{
					minHeight: "calc(100vh - 80px)",
					width: "100%",
					position: "relative",
					overflowY: "scroll",
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					padding: "0 2rem",
				}}
				className="no-scrollbar"
			>
				<Searchbar />
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
						marginTop: "2rem",
						alignItems: "center",
					}}
				>
					<h2
						style={{
							textAlign: "left",
							color: "#2E3031",
							fontWeight: "600",
							fontSize: "1.5rem",
							margin: 0,
						}}
					>
						All Articles ({filteredArticles.length})
					</h2>
					<Link to="/create">
						<button
							style={{
								backgroundColor: "#F20000",
								color: "white",
								fontWeight: "500",
								fontSize: "0.875rem",
								padding: "0.5rem 1rem",
								borderRadius: "0.375rem",
								cursor: "pointer",
								border: "none",
								transition: "background-color 0.25s",
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.backgroundColor = "#d40000";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.backgroundColor = "#F20000";
							}}
						>
							+ Create Article
						</button>
					</Link>
				</div>
				<div
					style={{
						width: "100%",
						marginTop: "0.75rem",
					}}
				>
					{loading ? (
						<div
							style={{
								width: "100%",
								height: "20vh",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<p style={{ color: "#2E3031" }}>Loading Articles</p>
						</div>
					) : filteredArticles.length === 0 ? (
						<div
							style={{
								width: "100%",
								height: "20vh",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<p style={{ color: "#2E3031" }}>No Articles Found</p>
						</div>
					) : (
						<div
							style={{
								width: "100%",
								display: "grid",
								gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
								gap: "1.25rem",
							}}
						>
							{filteredArticles.map((article) => (
								<ArticleCard key={article.id} article={article} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Articles;
