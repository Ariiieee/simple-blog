import { useEffect, useState } from "react";
import useAppContext from "../context/app.context";
const Searchbar = () => {
	const { articles, setFilteredArticles } = useAppContext();
	const [searchValue, setSearchValue] = useState<string>("");
	const [disabled, setDisabled] = useState<boolean>(false);

	// function to filter the articles by name
	const handleSearch = () => {
		const filteredArticles = articles.filter((article) => {
			return article.name.toLowerCase().includes(searchValue.toLowerCase());
		});
		setFilteredArticles(filteredArticles);
	};

	// Effect to reset the filtered articles when the search value is empty
	useEffect(() => {
		if (searchValue === "") {
			setFilteredArticles(articles);
		}
	}, [articles, searchValue, setFilteredArticles]);

	useEffect(() => {
		setDisabled(searchValue === "");
	}, [searchValue]);
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "row",
				gap: "1rem",
				alignItems: "center",
				backgroundColor: "#f7f7f8",
				paddingBottom: "1rem",
				position: "sticky",
				top: 0,
			}}
			className="search-form-container"
		>
			<input
				style={{
					width: "100%",
					maxWidth: "90%",
					border: "2px solid #eaebeb",
					color: "#2e3031",
					borderRadius: "1.2rem",
					height: "40px",
					backgroundColor: "white",
					outline: "none",
					padding: "0.25rem 0.75rem",
				}}
				type="text"
				placeholder="Search by name"
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
			/>
			<button
				style={{
					backgroundColor: disabled ? "#eaebeb" : "#f20000",
					color: disabled ? "#a0a0a0" : "white",
					fontWeight: "500",
					fontSize: "1rem",
					padding: "0.5rem 2rem",
					borderRadius: "100px",
					cursor: disabled ? "not-allowed" : "pointer",
					transition: "background-color 0.25s",
					border: "none",
					outline: "none",
				}}
				onClick={() => {
					handleSearch();
				}}
				disabled={disabled}
			>
				Search
			</button>
		</div>
	);
};

export default Searchbar;
