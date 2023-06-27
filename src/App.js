import React, { useState } from "react";
import "./App.css";

const App = () => {
 
  const [users, setUsers] =useState([
      {id:1,age:30,name:"송중기"},
      {id:2,age:24,name:"송강"},
      {id:3,age:21,name:"김유정"},
      {id:4,age:29,name:"구교환"},
    ]);

  const [name,setTitle] =useState('');
  const [age,setWord] =useState('');
  
  const nameChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setWord(event.target.value);
  };

//추가버튼 클릭

  const clickAddButtonHandler = () => {
    
    const newUser ={
      id: users.length +1,
      age:age,
      name:name,
    }

    setUsers([...users, newUser])
  };

  //삭제버튼 클릭

const clickRemoveButtonHandler = (id) => {
  const newUsers = users.filter(user => user.id !== id);
  setUsers(newUsers);
};


  return (
    <div>
      <div>
        이름:&nbsp; 
        <input value={name} onChange={nameChangeHandler}/> 
        <br />
        나이:&nbsp; 
        <input value={age} onChange={ageChangeHandler}/>
        <br />
        <button onClick ={clickAddButtonHandler}>추가</button>
      </div>
        <div className="app-style">
          {users.map(function (item) {
            return <User
            key={item.id} 
            item={item} clickRemoveButtonHandler={clickRemoveButtonHandler} />;
      })}
    </div>
    </div>

  );
};

const User = ({item,clickRemoveButtonHandler}) => {

return(
<div key={item.id} className="component-style">
                {item.age} -{item.name}
                <button onClick={() => clickRemoveButtonHandler(item.id)}>x</button>
            </div>
  );
};

export default App;