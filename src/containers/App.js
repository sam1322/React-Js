import React ,{Component} from 'react';
import './App.css';
import Scroll from '../components/Scroll' ;
import Cardlist from '../components/Cardlist.js'
import { onepiece } from '../picComponent/onepiece'  ;
import SearchBox from '../components/Search.js' ;

class App extends Component {
constructor(){
  super();    
  this.state = {
    onepiece : [],
    searchfield: ''

  }

}

componentDidMount(){
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(users => {
  // this.setState({
  //   onepiece :users  
  // })
  // }
  // );
  this.setState({
    onepiece :onepiece 
  }) ;
}

  onsearchChange = (event)=>{
    this.setState({
        searchfield :event.target.value 
    })
        
        // console.log(filteredarray) ;
  }

  render(){
    const filteredarray = this.state.onepiece.filter(onepiece => {
      return onepiece.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ;
    })
    if(this.state.onepiece.length === 0){
      return (
        <h1>
          Loading...
        </h1>
      )
    }
    return (
      <div className='tc'>
        <h1 className  ='f1'>OnePiece characters</h1>
        <SearchBox searchChange ={this.onsearchChange}/>
      <Scroll>
      <Cardlist onepiece = {filteredarray} />
      </Scroll>
      </div>
    );
  }
}

export default App;
