import React, {Component}from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';
import Scroll from './Scroll';


class App extends Component {

    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
    }

    onSearchFieldChange = (event)=> {
        this.setState({searchField : event.target.value} );
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    render(){
        const filteredRobots = this.state.robots.filter( robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        return (
            <div className="tc">
            <h1 className="f1" >RoboFriends</h1>
            <SearchBox onSearchFieldChange = {this.onSearchFieldChange}/>
            <Scroll>
            <CardList  robots = {filteredRobots}/>
            </Scroll>
          
            </div>
        );
    }
}

export default App;