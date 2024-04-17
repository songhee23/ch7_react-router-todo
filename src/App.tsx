import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { Routes, Route, Link } from 'react-router-dom'
import { DataView } from 'pages/DataView';
import { ToDoInput } from 'pages/ToDoInput';
import { ToDoListContextProvider } from 'context/ToDoList';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFound = styled.div`
  text-align: center;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #304ffe;
  padding: 8px 0;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
`;

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header>
          <StyledLink to="/">할 일 목록 앱</StyledLink>
        </Header>
        <Routes>
          <Route path="/" element={<DataView/>} />
          <Route path="/add" element={<ToDoInput />} />
          <Route
            path="*"
            element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
