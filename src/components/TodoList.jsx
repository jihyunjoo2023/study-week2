import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todo";
import { Link } from "react-router-dom";
import React from "react";

const TodoList = ({ isDone }) => {
  // store에서 todo 데이터 가져오기
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      <StTodoMenu>{isDone ? "Done..!" : "Working..."}</StTodoMenu>
      <StTodoList>
        {todo
          .filter((todoItem) => todoItem.isDone === isDone)
          .map(({ id, title, content }) => {
            return (
              <StTodoItem key={id}>
                <Link to={`/detail/${id}`}>상세보기</Link>
                <StTodoItemInfo>
                  <StTodoItemTitle>{title}</StTodoItemTitle> <br />
                  <StTodoItemContent>{content}</StTodoItemContent>
                </StTodoItemInfo>
                <StButtonSet>
                  <StStateChangeButton
                    onClick={() => {
                      dispatch(updateTodo(id));
                    }}
                  >
                    {isDone ? "취소" : "완료"}
                  </StStateChangeButton>
                  <StDeleteButton
                    onClick={() => {
                      dispatch(deleteTodo(id));
                    }}
                  >
                    삭제
                  </StDeleteButton>
                </StButtonSet>
              </StTodoItem>
            );
          })}
      </StTodoList>
    </>
  );
};

export default TodoList;

// styled-components
const StTodoMenu = styled.h1`
  margin: 25px 30px;
  font-size: 24px;
  font-weight: 900;
`;

const StTodoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StTodoItem = styled.div`
  /* height: 180px; */
  width: 280px;
  margin: 10px 10px 10px 10px;
  padding: 20px;
  background-color: #e5eefa;
  /* border: 3px solid #5b92dc; */
  border: 3px solid #8d50ff;

  border-radius: 20px;
`;

const StTodoItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding-top: 40px;

  font-size: 16px;
  color: black;
`;

const StTodoItemTitle = styled.h3`
  margin: 0px;
  padding: 0px;
  font-size: 20px;
`;

// 내용이 길어지면 줄바꿈 되도록
const StTodoItemContent = styled.p`
  margin-top: 0px;
  word-break: break-word;
`;

const StButtonSet = styled.div`
  gap: 10px;

  display: flex;
  justify-content: center;

  margin-top: 20px;
`;

const StStateChangeButton = styled.button`
  height: 30px;
  width: 40%;

  background-color: #f4f7fc;

  border: 2px solid #216acd;
  border-radius: 5px;
  cursor: pointer;


`;

const StDeleteButton = styled.button`
  height: 30px;
  width: 40%;

  background-color: #f4f7fc;

  border: 2px solid red;
  border-radius: 5px;
  cursor: pointer;
`;