import React from "react"
// import TodoList from "./Tod"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./ListItem.css"
import FlipMove from "react-flip-move"

function ListItems(props){
    
    
    const items= props.items;
    const listItems= items.map(item =>{
        return <div className="list" key={item.key}>
            <p>

                <input type="text" id={item.key} value={item.text}
                onChange={
                    (e) => {
                        props.setUpdate(e.target.value, item.key)
                    }
                }
                />
                <span>
                    <FontAwesomeIcon 
                    className="faicons" 
                    icon='trash'
                    onClick= { () => props.deleteItem(item.key)}
                    />
                 </span>
            </p>
        </div>
    })
    return (
        // <h1>From TodoList js</h1>
        <div>
        <FlipMove duration={300} > 
             {listItems}
        </FlipMove>
       </div>
        
    )
}



export default ListItems;