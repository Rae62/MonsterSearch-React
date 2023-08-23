import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
         {
          name: 'Linda',
          id: '455455a',
        },
        {
          name: 'Frank',
          id: '84874az',

        },
         {
          name: 'Jacky',
          id: '747445a',

        },
         {
          name: 'Andrei',
          id: '12187a',

        },
         {
          name: 'Frank',
          id: '4875515u',

        },
      ]

    
  }
  }

  render() {
    return (
      <div className="App"> 
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
            <h1 >{monster.name}</h1>
            </div>;
          })
        }
      </div>
    );
  }
}
export default App;
