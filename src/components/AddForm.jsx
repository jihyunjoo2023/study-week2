import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";
import styled from "styled-components";


const AddForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const addTodoItemHandler = (event) => {
        if (title.trim() === "" || content.trim() === "") {
            alert("제목과 내용을 입력해주세요")
            setTitle("");
            setContent("");
            return;
        }

        event.preventDefault();

        let nextTodoId = 1;

        dispatch(
            addTodo({
                id: nextTodoId++,
                title,
                content,
                isDone: false,
            })
        );
        setTitle("");
        setContent("");
    };

    return (
        <StAddForm onSubmit={addTodoItemHandler}>
            <label>제목: </label>
            <StInputTitle
                value={title}
                placeholder="제목을 입력해주세요."
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            &nbsp;
            <label>내용: </label>
            <StInputContent
                value={content}
                placeholder="내용을 입력해주세요."
                onChange={(event) => setContent(event.target.value)}
            />
            <StButton>추가하기</StButton>
        </StAddForm>
    );
};

export default AddForm;


// styled-components
const StAddForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 120px;

  padding: 0px 35px;

  background-color: #d8e5f7;

  border: 1px solid gray;
  border-radius: 10px;
`;

const StInputTitle = styled.input`
  height: 40px;
  width: 270px;

  padding: 0 12px;

  border: 1px solid rgb(182, 161, 161);
  border-radius: 4px;
`;

const StInputContent = styled.input`
  height: 40px;
  width: 600px;

  padding: 0 12px;

  border: 1px solid rgb(182, 161, 161);
  border-radius: 4px;
`;

const StButton = styled.button`
  width: 110px;
  height: 40px;

  margin-right: 10px;

  border: 1px solid gray;
  border-radius: 4px;

  font-weight: 700;
  font-size: 16px;
  color: black;
  cursor: pointer;  
`;
