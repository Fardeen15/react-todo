import React, { Component } from 'react'
import ReactDom from 'react-dom';
import './index.css';
import TodoForm from './compnents/todoForms'
import TodoItem from './compnents/todoItems'

class Hello extends Component {
    constructor() {
        super()
        this.deleteName = this.deleteName.bind(this);
        this.updateName = this.updateName.bind(this);
        this.inputValue = this.inputValue.bind(this);
        this.getvalue = this.getvalue.bind(this);
        this.Add = this.Add.bind(this);
        this.state = {
            person: [],
            currentName: "",
            index: ""
        }
    }
    Add() {
        var person = this.state.person;
        var value = document.getElementById('input').value;
        console.log(value, person)
        person.push({ name: value });
        this.setState({
            person: person
        })
        document.getElementById('input').value = ""
    }
    deleteName(index) {
        console.log(this.state.person)
        var persons = this.state.person
        persons.splice(index, 1)
        this.setState({ person: persons })
    }
    updateName(index) {
        document.getElementById('input').value = this.state.person[index].name
        this.setState({
            index: index
        })
        document.getElementById('add').style.display = "none"
        document.getElementById('update').style.display = "inline"
    }
    getvalue() {
        this.setState({
            currentName: document.getElementById('input').value
        })
    }
    inputValue() {
        var person = this.state.person;
        var currentName = this.state.currentName;
        var index = this.state.index;
        person[index].name = currentName
        this.setState({
            person: person
        })
        document.getElementById('input').value = ""
        document.getElementById('add').style.display = "inline"
        document.getElementById('update').style.display = "none"

    }
    render() {
        return (
            <div>
                <TodoForm state={this.state} getValue={this.getvalue} inputValue={this.inputValue} Add={this.Add} />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.person.map((person, index) => {
                            return <TodoItem
                                detail={person}
                                deletename={this.deleteName}
                                updatename={this.updateName}
                                key={index}
                                index={index}
                            />

                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDom.render(<Hello />, document.getElementById('root'))

