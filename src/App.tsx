import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom'
import { DataView } from 'pages/DataView';
import { InputContainer } from 'components/InputContainer';
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

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Routes>
          <Route path="/" element={<DataView/>} />
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
