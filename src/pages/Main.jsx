import styled from "styled-components";
import AddForm from "../components/AddForm";
import TodoList from "../components/TodoList";

const MainPage = () => {
    return (
        <StLayout>
            <StTitle>My Todo List</StTitle>
            <AddForm />
            <StTodoContainer>
                <TodoList isDone={false} />
                <TodoList isDone={true} />
            </StTodoContainer>
        </StLayout>
    );
};

export default MainPage;

const StLayout = styled.section`
    max-width: 1200px;
    min-width: 800px;

    margin: 0 auto;
`;

const StTitle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 50px 10px;
    font-size: 32px;
    font-weight: 800;
`;

const StTodoContainer = styled.main`
    display: flex;
    flex-direction: column;

    margin: 15px auto;
    padding: 10px 30px;

    background-color: #a1d1ff;

    border: 1px solid gray;
    border-radius: 10px;
`;