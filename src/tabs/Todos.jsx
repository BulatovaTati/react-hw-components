import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
    isEditing: false,
    currentTodo: {},
  };

  handleSubmit = data => {
    this.addTodo(data);
  };

  addTodo = text => {
    const todo = {
      id: nanoid(6),
      text: text,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  handleEditing = (id, text) => {
    this.setState({
      isEditing: true,
      currentTodo: { id, text },
    });
  };

  handleEditFormSubmit = e => {
    e.preventDefault();
    const { currentTodo, todos } = this.state;

    this.setState({
      todos: todos.map(todo => {
        return todo.id === currentTodo.id ? currentTodo : todo;
      }),
      isEditing: false,
    });
  };

  handleUpdateTodo = (id, updatedTodo) => {
    this.setState({
      currentTodo: { id, text: updatedTodo },
    });
  };

  handleCancel = () => {
    this.setState({ isEditing: false });
  };

  componentDidMount() {
    const getTodos = JSON.parse(localStorage.getItem('todos'));
    if (getTodos) {
      this.setState({ todos: getTodos });
    }
  }

  componentDidUpdate(_, prevState) {
    const { todos } = this.state;

    if (todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  render() {
    const { todos, currentTodo, isEditing } = this.state;
    const {
      handleEditFormSubmit,
      handleUpdateTodo,
      handleCancel,
      handleSubmit,
      deleteTodo,
      handleEditing,
    } = this;

    return (
      <>
        {isEditing ? (
          <EditForm
            onUpdate={handleEditFormSubmit}
            onChange={handleUpdateTodo}
            onCancel={handleCancel}
            currentTodo={currentTodo}
          />
        ) : (
          <SearchForm onSubmit={handleSubmit} />
        )}

        <Grid>
          {todos &&
            todos.map(({ id, text }) => (
              <GridItem key={id}>
                <Todo
                  id={id}
                  text={text}
                  deleteHandler={deleteTodo}
                  onUpdate={handleEditing}
                />
              </GridItem>
            ))}
        </Grid>
      </>
    );
  }
}
