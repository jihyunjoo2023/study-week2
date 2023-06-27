import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      title: "강의 듣기",
      content: "week 1 강의 완강하기",
      state: false
    },
    {
      id: 2,
      title: "리액트 만들기",
      content: "todo list 만들기",
      state: false
    }
  ]);

  const [title, setTitle] = useState('');
  const [content, setWord] = useState('');

  const nameChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setWord(event.target.value);
  };

  //추가버튼 클릭

  const clickAddButtonHandler = () => {

    const newUser = {
      id: users.length + 1,
      title: title,
      content: content,
      state: false
    }

    setUsers([...users, newUser]) // 불변객체 유지
  };

  //삭제버튼 클릭

  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers); // 불변객체 유지 
  };

  //완료버튼 클릭

  const clickDoneButtonHandler = (id) => {
    const updateTools = users.map((user) =>
      user.id === id ? { ...user, state: !user.state } : user
    );
    setUsers(updateTools); // 불변객체 유지 
  };



  return (
    <div className="container">
      <div className="todoContainer">
        <div class="parent">
          <div class="left">My Todo List</div>
          <div class="right">react</div>
        </div>
        <div class="middleBox">
          제목:&nbsp;
          <input value={title} onChange={nameChangeHandler} />
          내용:&nbsp;
          <input value={content} onChange={ageChangeHandler} />&nbsp;
          <button onClick={clickAddButtonHandler}>추가하기</button>
        </div>
        <h1>Working...🔥</h1>

        <div className="app-style">
          {/* state에 따른 조건부 설정이 누락되어서 문제 */}
          {users.filter(item => item.state === false).map(function (item) {
            return <User
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickDoneButtonHandler={clickDoneButtonHandler}
              btntitle="완료"
            />;
          })}

        </div>
        <div>
          <h1>Done..!🎉</h1>
          <div className="app-style">
            {users.filter(item => item.state === true).map(function (item) {
              return <User
                key={item.id}
                item={item}
                clickRemoveButtonHandler={clickRemoveButtonHandler}
                clickDoneButtonHandler={clickDoneButtonHandler}>
              </User>;
            })}

          </div>
        </div>

      </div>
    </div>


  );
};


const User = ({ item, clickRemoveButtonHandler, clickDoneButtonHandler }) => {

  return (
    <div key={item.id} className="component-style">

      <div className="titleBox">{item.title}</div>
      <div className="contentBox">{item.content}</div>
      <div className="buttonBox">
        <button onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</button>
        <button onClick={() => clickDoneButtonHandler(item.id)}>완료</button>
      </div>

    </div>
  );
};

export default App;