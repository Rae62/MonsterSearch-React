// import { Component, useState } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// Functionnal Components version

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value,setValue]
  const [monsters , setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));


  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });


  return(
    <div className="app">
      <h1 className="app-title">Monster Search</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList
        monsters={filteredMonsters}
      />
    </div>
  )
}
export default App;































// Class version


// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//   }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => 
//     this.setState(
//       () => {return {monsters: users}},
//       ))
//   }

//   onSearchChange =  (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     // [ { name : 'Leane'}, {name: 'Ludo'}]
//     this.setState(() => {
//       return { searchField }
//     })
//   }


//   render() {

//     const { monsters , searchField , } = this.state;
//     const {onSearchChange} = this
//     const filteredMonsters = monsters.filter((monster) => {
//       return  monster.name.toLocaleLowerCase().includes(searchField);
//      });

//     return (
//       <div className="App"> 
//       <h1 className="app-title">Monsters Search</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }
// export default App;
