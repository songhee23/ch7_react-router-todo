import { useState } from 'react';
import { ToDoInput } from 'pages/ToDoInput';
import { ShowInputButton } from 'components/ShowInputButton';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

export const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput/>}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  );
};
