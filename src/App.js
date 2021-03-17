import './App.css';
import { Component } from 'react';
import UserList from './components/UserList';
import SelectedUsers from './components/SelectedUsers';

const dbUsers = [
  {
    id: 1,
    fName: 'firstName1',
    lName: 'lastName1',
  },
  {
    id: 2,
    fName: 'firstName2',
    lName: 'lastName2',
  },
  {
    id: 3,
    fName: 'firstName3',
    lName: 'lastName3',
  },
  {
    id: 4,
    fName: 'firstName4',
    lName: 'lastName4',
  },
  {
    id: 5,
    fName: 'firstName5',
    lName: 'lastName5',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbUsers.map((u) => ({ ...u, isSelected: false })),
    };
  }
  setUsers = (newUsers) => {
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <h2>List of users:</h2>
        <UserList users={users} setUsers={this.setUsers} />
        <h2>Selected users:</h2>
        <SelectedUsers users={users} />
      </>
    );
  }
}
export default App;
