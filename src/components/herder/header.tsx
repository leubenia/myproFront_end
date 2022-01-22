import React from "react";
import MobaileNav from "./mobailenav"
import "./herder.css"

const 헤더 = () => {
	return (
		<>
			<nav className="headerCom">
				<div><a href="/">메인</a></div>
				<div><a href="/who">누구?</a></div>
				<div><a href="/"> 주요 경험</a></div>
				<div><a href="/"> 포트폴리오</a></div>
			</nav>
			<MobaileNav />
		</>
	);
};

export default 헤더;