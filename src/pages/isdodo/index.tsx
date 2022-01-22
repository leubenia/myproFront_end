import React,{ useState } from "react";
//css
import "./isdodo.css"


// 추가해보자..!


interface 누구냐넌{
    name:String,
    desc:String,
    nickname:String,
}

function 내가누구냐고() {
    const 누구누구:누구냐넌 = {
        name: "김도형",
        desc: "금공대 졸업하고 취준생 김도형이로소다",
        nickname: "도도 Or 르베니아(dodo Or lebania)"
    }
    

	return (
		<body className="dodobody">
			<div>
                {누구누구.name}
            </div>
            <div>
                {누구누구.nickname}
            </div>
            <div>
                {누구누구.desc}
            </div>
		</body>
	);
}

export default 내가누구냐고;
