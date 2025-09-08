
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  if(state.todo.isLoading) {
    return <h1>Loading...</h1>
  }
  if(state.todo.isError) {
    return  <h1>Data loading failed</h1>
  }

  return (
    <>
      <button onClick={ ()=> dispatch(fetchTodos()) }>Fetch Todos</button>
      {
        state.todo.data && state.todo.data.todos.map((todo) => (
          <p key={todo.id}>{todo.todo}</p>
        ) )
      }
    </>
  )
}

export default App
