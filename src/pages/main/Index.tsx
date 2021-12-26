import React,{ useState } from "react";
//css
import "./main.css"


// 추가해보자..!
import MyGitPro from "../mygiturl"

interface 깃인터페이스{
    title:string;
    url:string;
    img:string;
    text:string;
    stack:string;
}

function 메인() {
    
    const testis:깃인터페이스[] = [
        {
            title:"FORK(같이 점시먹어요!)",
            url:"https://github.com/hanghae99-LunchTogether/LunchTogether_Back_End",
            img:"public\fork.PNG",
            stack:"Node.js,MySql,RDS,AWS S3,AWS EC2,Redis",
            text:"Soket.io를 통한 알림 구현, 사용자의 위치정보를 받아와서 주변 사람, 점심약속 추천 서비스"
        },
        {
            title:"페이스북 (클론코딩)",
            url:"https://github.com/leubenia/cloncode_Backend_5",
            img:"public\fork.PNG",
            stack:"Node.js,MySQL,AWS EC2,RDS,S3",
            text:"서버 내부의 용량을 줄이기 위해 서버 내부 이미지 저장보다는 S3 이미지 스토어사용"
        },
        {
            title:"IDEA 클론코딩 (클론코딩)",
            url:"https://github.com/Yunjaejo/mysql_idea_backend",
            img:"public\fork.PNG",
            stack:"Node.js,MySQL,AWS EC2,mongo DB",
            text:"첫 프론트 개발자랑 협업한 프로젝트, 기존 mongoDB만 사용하다 첫 My SQL로 변경 OMR보다는 Query문을 사용한 프로젝트"
        },
        {
            title:"중고장터 (클론코딩)",
            url:"https://github.com/Joa-Market/joa_Ts_Back_End",
            img:"public\fork.PNG",
            stack:"Node.js,MySql,RDS,AWS S3,AWS EC2,Redis,Reack.js(Js),Typescript",
            text:"Typescript를 사용하여 해외에 거주하는 한국인분들을 위해 중고 거래 웹 사이트를 만들어서 배포하려고 한다. Back_End는 Node.js(Express,Ts), Front_End는 React(Js)"
        },
    ]
    const [내깃, set깃] = useState(testis)

	return (
		<body className="mainBody">
			<div className="tilte">Back_End 주니어 개발자</div>
			<section>
                <div className="mytext">백엔드를 희망하는 주니어 개발자.
                <div>김도형</div>
                <p>금오 공과대학교 졸업</p>
                <p>스파르타 코딩클럽 부트캠프 3기</p>
                </div>
            </section>
            <section className="stroy">
                <div>
                <div className="stilte">핵심 경험...!?</div>
                <div className="mystroy">
                    <div>Node.js/Express Rest API 서버 개발</div>
                    <div>AWS EC2, RDS, S3</div>
                    <div>Socket.io</div>
                    <div>Redis 캐시서버(Redis Labs)</div>
                    <div>Typescript/Node/Express</div>
                    <div>현제 페이지는 React(Ts)</div>
                </div>
                </div>
            </section>
            <div className="stilte" id ="protilte">프로젝트 List</div>
            {내깃.map((item, idx) => {
                return <MyGitPro num={idx} {...item}  />;
            })}
            <div>
                
            </div>
		</body>
	);
}

export default 메인;
