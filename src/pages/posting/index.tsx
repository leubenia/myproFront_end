import React ,{useState}from "react";
import { history } from "../../redux/configureStore";
import api from "../../shared/axios"

const 포스팅 = ()=>{
    const [post, setPost] = useState({
        productImg: "",
        price: 0,
      });
    const onChange = (e:React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setPost({
          ...post,
          [target.name]: target.value,
        });
        console.log(post);
      };
      const salePosting = () => {
        
          api.포트폴리오넣자(post)
            .then(data => {
              const {
                data: { result },
              } = data;
              if (result === "success") {
                history.push("/")
              } else {
                console.log("에러확인해주세요");
              }
            })
            .catch(err => {
                history.push(`/?err=${err}`)
            });
        }
    return(
        <>
        <div className="addpost__wrapper">
      </div>
      <input placeholder="여기에는 제목" name="title" onChange={onChange} />
      <input
        placeholder="여기에는 상품설명"
        name="contents"
        onChange={onChange}
      />
      <input placeholder="여기에는 상품가격" name="price" onChange={onChange} />
      <input
        placeholder="여기에는 상품이름"
        name="productName"
        onChange={onChange}
      />
      <button onClick={salePosting}> 클릭시 올림</button>
    </>
    )
}
export default 포스팅