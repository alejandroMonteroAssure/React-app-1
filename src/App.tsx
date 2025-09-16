import './App.css'
import UserList from './components/UserList/UserList'
import { users } from './users/UserRepository'

function App() {

  return (
    <UserList users={users}/>
  )
}

export default App
