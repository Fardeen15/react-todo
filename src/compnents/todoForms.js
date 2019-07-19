import React from 'react'
class TodoForm extends React.Component {
    render() {
        // console.log(this.props.state)
        return (
            <div>
                <h1 className="btn btn-secondary btn-lg btn-block">TODO LIST</h1>
                <form >
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Enter Name</span>
                        </div>
                        <input type="text" id="input" onChange={this.props.getValue} className="form-control" />
                        <button className="btn btn-secondary update" id="update" onClick={(ev) => {
                            ev.preventDefault()
                            this.props.inputValue(this.props.index)
                        }} >update</button>
                        <button className="btn btn-secondary add" id="add" onClick={(ev)=>{
                            ev.preventDefault()
                            this.props.Add(this.props.index)
                        }} >Add</button>

                    </div>
                </form>
            </div>
        )
    }
}
export default TodoForm;
