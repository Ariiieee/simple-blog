import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Searchbar from "../components/Searchbar";
import useAppContext from "../context/app.context";

const Articles = () => {
	const { filteredArticles, loading } = useAppContext();

	return (
		<div>
			<div
				style={{
					height: "100vh",
					width: "100%",
					position: "relative",
					overflowY: "scroll",
					scrollbarWidth: "none",
					msOverflowStyle: "none",
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
					}}
				>
					<h6
						style={{
							textAlign: "left",
							color: "#2E3031",
							fontWeight: "600",
							fontSize: "1.25rem",
						}}
					>
						Articles
					</h6>
					<Link to="/create">
						<p
							style={{
								color: "#F20000",
								cursor: "pointer",
							}}
						>
							+ Create Article
						</p>
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
