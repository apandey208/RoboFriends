import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
//import Scroll from './Scroll';



class App extends React.Component{ 
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>Response.json())
        .then(users => this.setState({robots: users}));
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        }

    render() {
        const {robots} = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
            <h1 className='f1'>Decepticons</h1>
            <Searchbox  searchChange={this.onSearchChange}/>
            <CardList robots={filterRobots}/>
            </div>
        );
    }
}


export default App;