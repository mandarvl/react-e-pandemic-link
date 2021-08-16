import { Component } from 'react' ;

class Test extends Component{
    state = {
        apiResponse: ""
    }

    loadData(){
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res})) ;
    }

    componentDidMount(){
        this.loadData() ;
    }

    render(){
        return (<p>{this.state.apiResponse}</p>) ;
    }
}

export default Test ;