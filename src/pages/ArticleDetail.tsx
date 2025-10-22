import { useParams, Link, useNavigate } from "react-router-dom";
import useAppContext from "../context/app.context";
import { useEffect, useState } from "react";
import type { ArticleType } from "../utils/type";
import Header from "../components/Header";

const ArticleDetail = () => {
	const { id } = useParams<{ id: string }>();
	const { articles, deleteArticle } = useAppContext();
	const navigate = useNavigate();
	const [article, setArticle] = useState<ArticleType | null>(null);

	useEffect(() => {
		if (id && articles.length > 0) {
			const foundArticle = articles.find((article) => article.id === parseInt(id));
			if (foundArticle) {
				setArticle(foundArticle);
			} else {
				navigate("/");
			}
		}
	}, [id, articles, navigate]);

	if (!article) {
		return (
			<div
				style={{
					width: "100%",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<p style={{ color: "#2E3031" }}>Loading article...</p>
			</div>
		);
	}

	return (
		<div
			style={{
				width: "100%",
				minHeight: "100vh",
			}}
		>
			<Header />
			<div
				style={{
					padding: "2rem",
				}}
			>
				<Link to="/">
					<p
						style={{
							color: "#F20000",
							cursor: "pointer",
							fontSize: "0.875rem",
							marginBottom: "2rem",
						}}
					>
						&larr; Back to Articles
					</p>
				</Link>

				<div
					style={{
						maxWidth: "800px",
						margin: "0 auto",
						backgroundColor: "white",
						borderRadius: "0.5rem",
						border: "1px solid #EAEBEB",
						padding: "2rem",
						boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
					}}
				>
					<div
						style={{
							borderBottom: "1px solid #EAEBEB",
							paddingBottom: "1rem",
							marginBottom: "1.5rem",
						}}
					>
						<h1
							style={{
								color: "#2E3031",
								fontSize: "2rem",
								fontWeight: "600",
								marginBottom: "0.5rem",
								textTransform: "capitalize",
							}}
						>
							{article.name}
						</h1>
						<p
							style={{
								color: "#6F7376",
								fontSize: "1rem",
								marginBottom: "0.5rem",
							}}
						>
							By: {article.email}
						</p>
						<p
							style={{
								color: "#6F7376",
								fontSize: "0.875rem",
							}}
						>
							Article ID: {article.id}
						</p>
					</div>

					<div
						style={{
							lineHeight: "1.6",
							color: "#2E3031",
							fontSize: "1.1rem",
						}}
					>
						<p style={{ whiteSpace: "pre-wrap" }}>
							{article.body.charAt(0).toUpperCase() + article.body.slice(1)}
						</p>
					</div>

					<div
						style={{
							marginTop: "2rem",
							paddingTop: "1rem",
							borderTop: "1px solid #EAEBEB",
							display: "flex",
							gap: "1rem",
							justifyContent: "flex-end",
						}}
					>
						<Link to={`/edit/${article.id}`}>
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
								Edit Article
							</button>
						</Link>
						<button
							style={{
								backgroundColor: "#dc2626",
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
								e.currentTarget.style.backgroundColor = "#b91c1c";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.backgroundColor = "#dc2626";
							}}
							onClick={() => {
								if (
									window.confirm("Are you sure you want to delete this article?")
								) {
									deleteArticle(article.id);
									navigate("/");
								}
							}}
						>
							Delete Article
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleDetail;
