import React, { useState } from "react";
import { history } from "../../redux/configureStore";
import api from "../../shared/axios";

interface 깃인터페이스 {
	title: string;
	url: string;
	img: string;
	text: string;
	stack: string;
}
const 포스팅 = () => {
	const [post, setPost] = useState<깃인터페이스>({
		title: "",
		url: "",
		img: "",
		text: "",
		stack: "",
	});
	const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		setPost({
			...post,
			[target.name]: target.value,
		});
		console.log(post);
	};
	const salePosting = () => {
		api.포트폴리오넣자(post)
			.then((data: { data: { result: any ,err?:any} }) => {
				const {
					data: { result },
				} = data;
				if (result === "success") {
					history.push("/");
				} else {
					console.log("에러확인해주세요", data.data.err);
				}
			})
			.catch((err: any) => {
				window.alert(err)
			});
	};
  const 테스트용 = ()=>{
    console.log(post);
    window.alert(`${post.img}, ${post.stack}, ${post.text}, ${post.title},${post.url}`)
  }
	return (
		<>
			<div className="addpost__wrapper"></div>
			<input
				placeholder="여기에는 제목"
				name="title"
				onChange={onChange}
			/>
			<input
				placeholder="여기에는 URL"
				name="url"
				onChange={onChange}
			/>
			<input
				placeholder="여기에는 이미지 주소(현재는 파일 안넣음)"
				name="img"
				onChange={onChange}
			/>
			<input
				placeholder="여기에는 설명들어가야됨"
				name="text"
				onChange={onChange}
			/>
      <input
				placeholder="여기에는 사용한 스택 써야지요"
				name="stack"
				onChange={onChange}
			/>
			<button onClick={테스트용}> 클릭시 올림</button>
		</>
	);
};
export default 포스팅;
