
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

let nextTodoId = 1;

export const addTodo = ({ title, content }) => {
    const id = nextTodoId++;
    return {
        type: ADD_TODO,
        payload: {
            id,
            title,
            content,
            isDone: false
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: { id }
    };
};

export const updateTodo = (id) => {
    return {
        type: UPDATE_TODO,
        payload: { id }
    };
};

const initialState = {
    todo: [
        {
            id: nextTodoId++,
            title: "강의보기",
            content: "리액트 숙련주차 강의 다 보기",
            isDone: false
        },
        {
            id: nextTodoId++,
            title: "일기쓰기",
            content: "내일 할 일 다 기입하기",
            isDone: false
        },
    ],
};


const todo = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((todoItem) => todoItem.id !== payload.id),
            };
        case UPDATE_TODO:
            return {
                ...state,
                todo: state.todo.map((todoItem) => {
                    return todoItem.id === payload.id
                        ? { ...todoItem, isDone: !todoItem.isDone }
                        : todoItem;
                }),
            };
        default:
            return state;
    }
};

export default todo;