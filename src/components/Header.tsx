import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();

	return (
		<header
			style={{
				backgroundColor: "white",
				borderBottom: "1px solid #EAEBEB",
				padding: "1rem 2rem",
				position: "sticky",
				top: 0,
				zIndex: 100,
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
			}}
		>
			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Link
					to="/"
					style={{
						textDecoration: "none",
						color: "#2E3031",
					}}
				>
					<h1
						style={{
							fontSize: "1.5rem",
							fontWeight: "700",
							margin: 0,
							color: "#2E3031",
						}}
					>
						My Blog
					</h1>
				</Link>

				<nav
					style={{
						display: "flex",
						gap: "2rem",
						alignItems: "center",
					}}
				>
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: location.pathname === "/" ? "#F20000" : "#6F7376",
							fontWeight: location.pathname === "/" ? "600" : "400",
							fontSize: "1rem",
							transition: "color 0.2s",
						}}
					>
						Articles
					</Link>
					<Link
						to="/create"
						style={{
							textDecoration: "none",
							color: location.pathname === "/create" ? "#F20000" : "#6F7376",
							fontWeight: location.pathname === "/create" ? "600" : "400",
							fontSize: "1rem",
							transition: "color 0.2s",
						}}
					>
						Create Article
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
