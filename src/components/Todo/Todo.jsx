import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';

import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ id, text, deleteHandler, onUpdate }) => {
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px"></Text>
      <Text> {text}</Text>
      <DeleteButton type="button" onClick={() => deleteHandler(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton type="button" onClick={() => onUpdate(id, text)}>
        <RiEdit2Line size={24} />
      </EditButton>
    </TodoWrapper>
  );
};
