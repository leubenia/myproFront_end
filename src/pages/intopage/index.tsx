import React,{ useState } from "react";


//api
import api from "../../shared/axios";
//css
import "./intopage.css"


// 추가해보자..!


interface 깃인터페이스{
    title:string;
    url:string;
    img:string;
    text:string;
    stack:string;
}

function 내가누구냐고() {
    const [git, setgit] = useState<깃인터페이스>()

    const addLunch = async () => {
        try {
          const data = api.포트폴리오넣자(git!)
          
        } catch (error:any) {
         
        }
      };


	return (
		<body className="dodobody">
            
		</body>
	);
}

export default 내가누구냐고;
