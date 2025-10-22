import { Link } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
// import Header from "../components/Header";

const CreateArticles = () => {
	return (
		<div
			style={{
				width: "100%",
				minHeight: "100vh",
			}}
		>
			{/* <Header /> */}
			<div style={{ padding: "0 2rem" }}>
				<Link to="/">
					<p
						style={{
							color: "#F20000",
							cursor: "pointer",
							fontSize: "0.875rem",
							marginTop: "1rem",
						}}
					>
						&larr; Go Back
					</p>
				</Link>
				<ArticleForm />
			</div>
		</div>
	);
};

export default CreateArticles;
