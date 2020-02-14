import React from 'react';

class Home extends React.Component{

    constructor(){
        super();
        console.log("constructor");
    }
    state={
        count:0
    }

    render(){
        return(
            <div>
                <h1>Home Page</h1>
                {this.props.msg}
                {this.state.count}
                <button onClick={()=>this.increment()}>Inc</button>
                <button onClick={this.props.testFun}>Test</button>
                <button onClick={this.props.oneMoreFun}>another</button>

                {
                    true?
                        <div>true</div>
                        :
                        <div>false</div>
                }
            </div>
            
        )
    }

    increment =() =>{
        this.setState({
            count: this.state.count+1
        })
    }

    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
}

export default Home;