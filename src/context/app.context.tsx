import { createContext, useContext } from "react";
import type { ArticleType, ArticleFormType } from "../utils/type";

type AppContextType = {
	articles: ArticleType[];
	setArticles: (articles: ArticleType[]) => void;
	filteredArticles: ArticleType[];
	setFilteredArticles: (filteredArticles: ArticleType[]) => void;
	loading: boolean;
	createArticle: (article: ArticleFormType) => void;
};

export const AppContext = createContext({} as AppContextType);

const useAppContext = () => {
	const context = useContext(AppContext);
	return context;
};

export default useAppContext;
