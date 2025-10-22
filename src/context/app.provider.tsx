import React from "react";
import { useState, useEffect } from "react";
import type { ArticleType, ArticleFormType } from "../utils/type";
import { AppContext } from "./app.context";

type AppProviderProps = {
	children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
	const [articles, setArticles] = useState<ArticleType[]>([]);
	const [filteredArticles, setFilteredArticles] = useState<ArticleType[]>([]);

	const [loading, setLoading] = useState<boolean>(false);

	const getArticleData = async () => {
		try {
			setLoading(true);

			const response = await fetch("https://jsonplaceholder.typicode.com/comments");

			const data = await response.json();
			setArticles(data);
			setFilteredArticles(data);
		} catch (error) {
			alert("Error fetching articles");
			console.log(error, "error");
		} finally {
			setLoading(false);
		}
	};

	//useEffect to fetch article data from API when component is mounted
	useEffect(() => {
		getArticleData();
	}, []);

	const createArticle = async (article: ArticleFormType) => {
		const data = {
			...article,
			postId: 1,
			id: articles.length + 1,
		};
		try {
			setLoading(true);

			await fetch("https://jsonplaceholder.typicode.com/comments", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"content-type": "application/json, charset=utf-8",
				},
			});
			setArticles([data, ...articles]);
			setFilteredArticles([data, ...articles]);
		} catch (error) {
			alert("Error creating article");
			console.log(error, "error");
		} finally {
			setLoading(false);
		}
	};

	return (
		<AppContext.Provider
			value={{
				articles,
				setArticles,
				filteredArticles,
				setFilteredArticles,
				loading,
				createArticle,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
