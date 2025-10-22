import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArticleSchema } from "../utils/validation";
import type { ArticleFormType } from "../utils/type";
import useAppContext from "../context/app.context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ArticleForm = () => {
	const navigate = useNavigate();
	const { createArticle, loading } = useAppContext();
	const [disabled, setDisabled] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ArticleFormType>({
		defaultValues: {
			name: "",
			email: "",
			body: "",
		},
		resolver: zodResolver(ArticleSchema),
	});

	const onSubmit: SubmitHandler<ArticleFormType> = (data: ArticleFormType) => {
		// Handle form submission with valid data
		createArticle(data);
		navigate("/");
	};
	useEffect(() => {
		if (loading) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [disabled, loading]);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{
				width: "100%",
				maxWidth: "60%",
				margin: "0 auto",
				paddingTop: "2rem",
			}}
			className="article-form"
		>
			<div>
				<h4
					style={{
						textAlign: "center",
						color: "#2E3031",
						marginBottom: "1rem",
						fontWeight: "600",
					}}
				>
					CREATE ARTICLE
				</h4>
				{/* Label and input for Name */}
				<label htmlFor="name" className="label">
					Name
				</label>
				<input
					type="text"
					id="name"
					placeholder="Name"
					{...register("name")}
					style={{
						width: "100%",
						border: errors.name ? "1px solid #ff0000" : "2px solid #eaebeb",
						color: "#2e3031",
						borderRadius: "1.2rem",
						height: "40px",
						backgroundColor: "white",
						outline: "none",
						padding: "0.25rem 0.75rem",
					}}
				/>

				<span
					style={{
						color: "#ff0000",
						fontSize: "0.875rem",
						fontWeight: "500",
						lineHeight: "1.25rem",
						textAlign: "left",
						marginTop: "0.25rem",
					}}
				>
					{errors.name?.message}
				</span>
			</div>
			<div style={{ marginTop: "1rem" }}>
				{/* Label and input for Email */}
				<label htmlFor="email" className="label">
					Email
				</label>
				<input
					type="email"
					id="email"
					placeholder="Email"
					{...register("email")}
					style={{
						width: "100%",
						border: errors.email ? "1px solid #ff0000" : "2px solid #eaebeb",
						color: "#2e3031",
						borderRadius: "1.2rem",
						height: "40px",
						backgroundColor: "white",
						outline: "none",
						padding: "0.25rem 0.75rem",
					}}
				/>

				<span
					style={{
						color: "#ff0000",
						fontSize: "0.875rem",
						fontWeight: "500",
						lineHeight: "1.25rem",
						textAlign: "left",
						marginTop: "0.25rem",
					}}
				>
					{errors.email?.message}
				</span>
			</div>
			<div style={{ marginTop: "1rem" }}>
				{/* Label and textarea for Body */}
				<label htmlFor="body" className="label">
					Body
				</label>
				<textarea
					id="body"
					placeholder="Body"
					{...register("body")}
					style={{
						width: "100%",
						height: "120px",
						border: errors.body ? "1px solid #ff0000" : "2px solid #eaebeb",
						color: "#2e3031",
						borderRadius: "1.2rem",
						backgroundColor: "white",
						outline: "none",
						padding: "0.25rem 0.75rem",
					}}
				/>

				<span
					style={{
						color: "#ff0000",
						fontSize: "0.875rem",
						fontWeight: "500",
						lineHeight: "1.25rem",
						textAlign: "left",
						marginTop: "0.25rem",
					}}
				>
					{errors.body?.message}
				</span>
			</div>
			<button
				type="submit"
				role="button"
				style={{
					marginTop: "1rem",
					backgroundColor: disabled ? "#eaebeb" : "#f20000",
					color: disabled ? "#a0a0a0" : "white",
					fontWeight: "500",
					fontSize: "1rem",
					padding: "0.5rem 2rem",
					borderRadius: "100px",
					cursor: disabled ? "not-allowed" : "pointer",
					transition: "background-color 0.25s",
					border: "none",
				}}
				disabled={disabled}
			>
				{loading ? "Loading..." : "Create Article"}
			</button>
		</form>
	);
};

export default ArticleForm;
