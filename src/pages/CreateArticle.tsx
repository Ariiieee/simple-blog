import { Link } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";

const CreateArticles = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
			}}
		>
			<Link to="/">
				<p
					style={{
						color: "#F20000",
						cursor: "pointer",
						fontSize: "0.875rem",
					}}
				>
					&larr; Go Back
				</p>
			</Link>
			<ArticleForm />
		</div>
	);
};

export default CreateArticles;
