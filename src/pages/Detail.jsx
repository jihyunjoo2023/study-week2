import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Detail() {
  const { todo } = useSelector((state) => state.todo);
  const { id } = useParams();  // 문자열이 와요 
  const writeTodo = todo.find((todoItem) => todoItem.id === +id); // 숫자와 문자를 비교히나까. 
  return (
    <StLayout>
      <StTodoItem>
        <StNav>
          <div>id: {writeTodo.id}</div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            이전
          </Link>
        </StNav>
        <StTodoItemInfo>
          <StTodoItemTitle>{writeTodo.title}</StTodoItemTitle><br />
          <StTodoItemContent>{writeTodo.content}</StTodoItemContent>
        </StTodoItemInfo>
      </StTodoItem>
    </StLayout>
  );
}

export default Detail;

const StLayout = styled.section`
  max-width: 1200px;
  min-width: 800px;

  margin: auto;
`;

const StTodoItem = styled.div`
  width: 700px;
  margin: 100px auto;
  padding: 50px;

  background-color: #e5eefa;
  border: 3px solid #5b92dc;

  border-radius: 20px;
`;

const StNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StTodoItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding-top: 40px;

  font-size: 16px;
  color: #3f0058;
`;

const StTodoItemTitle = styled.h3`
  margin: 0px;
  padding: 0px;
  font-size: 20px;
`;

const StTodoItemContent = styled.p`
  margin-top: 0px;
`;