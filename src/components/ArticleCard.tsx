import { Link } from "react-router-dom";
import { capitalize } from "../utils/function";
import type { ArticleType } from "../utils/type";

type ArticleCardProps = {
	article: ArticleType;
};
const ArticleCard = ({ article }: ArticleCardProps) => {
	return (
		<Link
			to={`/article/${article.id}`}
			style={{
				textDecoration: "none",
				color: "inherit",
			}}
		>
			<div
				style={{
					borderRadius: "0.375rem",
					border: "0.7px solid #EAEBEB",
					padding: "0.75rem",
					backgroundColor: "white",
					cursor: "pointer",
					transition: "transform 0.2s, box-shadow 0.2s",
				}}
				onMouseOver={(e) => {
					e.currentTarget.style.transform = "translateY(-2px)";
					e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
				}}
				onMouseOut={(e) => {
					e.currentTarget.style.transform = "translateY(0)";
					e.currentTarget.style.boxShadow = "none";
				}}
			>
				<p
					style={{
						color: "#2E3031",
						fontWeight: "500",
						textAlign: "left",
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
					}}
				>
					Name: <span style={{ textTransform: "capitalize" }}>{article.name}</span>
				</p>
				<p
					style={{
						color: "#6F7376",
						fontWeight: "500",
						textAlign: "left",
						display: "-webkit-box",
						WebkitLineClamp: 1,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
					}}
				>
					Email:{article.email}
				</p>

				<p
					style={{
						color: "#2E3031",
						marginTop: "0.5rem",
						textAlign: "left",
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
					}}
				>
					{capitalize(article.body)}
				</p>
			</div>
		</Link>
	);
};

export default ArticleCard;
