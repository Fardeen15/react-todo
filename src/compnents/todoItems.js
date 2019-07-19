import React, {Component} from 'react'

class TodoItems extends Component {
    render() {
        return (
                <tr itemScope = "row" >
                    <td>{this.props.index + 1}</td>
                    <td>
                        {this.props.detail.name}
                    </td>
                    <td>
                    <button className="btn btn-secondary del" onClick={(ev) => {
                        this.props.deletename(this.props.index)
                    }}
                    >Delete</button>
                    </td>
                    <td>

                    <button className="btn btn-secondary edt" onClick={(ev) => {
                        this.props.updatename(this.props.index)
                    }}
                    >Edit</button>
                    </td>
                </tr>
        )
    }
}
export default TodoItems