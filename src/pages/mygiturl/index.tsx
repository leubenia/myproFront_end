import React from "react";
//css
import "./giturl.css"
interface 깃인터페이스{
    title:string;
    url:string;
    img:string;
    text:string;
    stack:string;
    num:number;
}

function 깃프로젝트(prop:깃인터페이스) {
    console.log(prop)
	return (
		<>
        <div className={prop.num%2 === 0?"gitmain1":"gitmain2"}>
            <div className="gittitle">{prop.title}</div>
            <div className="giturl">{prop.url}</div>
            <div className="gittext">{prop.text}</div>
            <img className={prop.num%2 === 0?"gitimg1":"gitimg2"} src="https://firebasestorage.googleapis.com/v0/b/upload-image-d55d4.appspot.com/o/images%2Fdod.jpeg?alt=media&token=a66ab179-f1fd-4d6d-8aba-5f968429f02f"/>
        </div>
		</>
	);
}

export default 깃프로젝트;
