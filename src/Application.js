/**
 * Created by willians on 24/7/17.
 */
import React, {Component} from 'react';
import {database} from './firebase'

class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            newData: ''
        }

        this.dataRef = null
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.dataRef  = database.ref('/')

        this.dataRef.on('value', (snapshot) => {
            console.log("VALORES: ", snapshot);
            this.setState({
                data: snapshot.val()
            })
        })

    }

    handleChange(event) {
        const newData =  event.target.value;
        this.setState({
            newData
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.dataRef
            .push(this.state.newData);
    }

    render(){
        return (
            <div className="app">
                <div className="header">
                    <h2>Connecting react to firebase</h2>
                </div>
                <div className="container-firebase">

                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newData} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )

    }
}

export default Application