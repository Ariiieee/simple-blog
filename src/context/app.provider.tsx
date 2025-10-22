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

	const updateArticle = async (id: number, article: ArticleFormType) => {
		try {
			setLoading(true);

			const updatedData = {
				...article,
				postId: 1,
				id: id,
			};

			await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
				method: "PUT",
				body: JSON.stringify(updatedData),
				headers: {
					"content-type": "application/json, charset=utf-8",
				},
			});

			const updatedArticles = articles.map((article) =>
				article.id === id ? updatedData : article
			);
			setArticles(updatedArticles);
			setFilteredArticles(updatedArticles);
		} catch (error) {
			alert("Error updating article");
			console.log(error, "error");
		} finally {
			setLoading(false);
		}
	};

	const deleteArticle = async (id: number) => {
		try {
			setLoading(true);

			await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
				method: "DELETE",
			});

			const updatedArticles = articles.filter((article) => article.id !== id);
			setArticles(updatedArticles);
			setFilteredArticles(updatedArticles);
		} catch (error) {
			alert("Error deleting article");
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
				updateArticle,
				deleteArticle,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
