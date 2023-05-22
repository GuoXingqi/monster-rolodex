import { useState, useEffect} from 'react';

import SearchBox from './components/search-box/search-box-component';
import CardList from './components/card-list/card-list-component';

import { getData } from './utils/data.utils';
import { ChangeEvent } from 'react';

import './App.css';

//functional components

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  const [monsters, setMonsters] = useState<Monster[]>([]);//inital monster array
  const [searchField, setSearchField] = useState('');//inital searh field
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);//inital monster array

  //hook fetched monsters, with re-hook condition null
  useEffect( () => {
      const fetchUsers = async () => {
        const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
        setMonsters(users);
      };
      fetchUsers();
  }, []);

  //hook set new filteres monster values only if monsters/searchField changes
  useEffect( ()=>{
    //filter monsterr by searchField
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setfilteredMonsters(newfilteredMonsters);
  },[monsters, searchField])

  //set changedSearchField on event changes
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const changedSearchField: string = event.target.value.toLocaleLowerCase();
    setSearchField(changedSearchField);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monster-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}


//class components

// class App extends Component { //reprensents the entire application

//   constructor() {
//     super(); //run constructor for parent class Component

//     this.state = {
//       monsters: [],//null default
//       searchField: '',
//     };
//   }

//   //fetch api data for monsters list
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState( () => {
//         return {monsters: users}
//         }
//       ));
//   }

//   //event only changes serachField, function definition
//   onSearchChange = (event) => {
//     this.setState( () => {
//       return { searchField: event.target.value.toLocaleLowerCase() }
//       }
//     )
//   }

//   render() {

//     //destuctering object and arrays
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     //filter monsters value everytime it renders
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='monsters-search-box'
//           placeholder='Search monsters' 
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={ filteredMonsters }/>
//       </div>
//     );
//   }
// }

export default App;
//functional components are components too, they need to be 'export defaul'ed after defination