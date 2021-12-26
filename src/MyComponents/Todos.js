import React from 'react'
import { Todo_items } from './Todo_items';

export const Todos = (props) => {
    let todosStyle = {
        // margin: "80vh"
    }
    return (
        <div className="container" style={todosStyle}>
            <h4 className='my-3'>My To-Do's List</h4> <hr/>

            {/* if there are no todos in the list */}
            {/* use of map function that returns  an array which contains the result */}
            {props.todos.length === 0? "No To-Do's to display!!":
            props.todos.map((todo)=>{
                // now below it will return all the items
                return(<Todo_items todo={todo} key={todo.sno} onDelete={props.onDelete} />) 
            })}
            

        </div>
    )
}

