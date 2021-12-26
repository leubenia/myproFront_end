import React from "react";
import MobaileNav from "./mobailenav"
import "./herder.css"

const 헤더 = () => {
	return (
		<>
			<nav className="headerCom">
				<div>메인</div>
				<div>누구?</div>
				<div>주요 경험</div>
				<div>포트폴리오</div>
			</nav>
			<MobaileNav />
		</>
	);
};

export default 헤더;