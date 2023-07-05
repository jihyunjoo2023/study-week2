//import { combineReducers, legacy_createStore } from 'redux';//바닐라 js
//import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todo from "../modules/todo";

//const store = configureStore({ reducer: { todo } })

const rootReducer = combineReducers({
    todo,
});
const store = createStore(rootReducer);//바닐라 js

export default store;



//import todo from "../modules/todo"; // modules에서 todo 데이터 import

//modules에 있는 Reducer 등록, ES6 키와 값이 같을 때 뒤에 선언 생략가능


//export default store;