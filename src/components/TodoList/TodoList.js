import React, { Component } from 'react';
import ListItems from '../ListItem/ListItem';
import "./TodoList.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

library.add(faTrash);

class TodoList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }


    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !== ""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })

        }

    }
    deleteItem(key){
        const filteredItems = this.state.items.filter(item =>
            item.key!==key);
            this.setState(
                {items:filteredItems}
            )
    }

    setUpdate(text, key){
        const items = this.state.items;
        
        // eslint-disable-next-line array-callback-return
        items.map(item => {
            if(item.key===key){
                item.text=text;
            }
        })

        this.setState(
            {
                items: items
            }
        )
    }

    render(){
        return(
           
            <div className="App">
             <h1 id="heading">Todo App</h1>
                <header>
                    <form id="todo-form" onSubmit={this.addItem}>

                        <input type="text" 
                                placeholder="Enter item"
                                value={this.state.currentItem.text}
                                onChange={this.handleInput}
                                />

                        <button type="submit">Add Task</button>

                    </form>
                </header>

               <ListItems items ={this.state.items}
                          deleteItem = {this.deleteItem} 
                          setUpdate = {this.setUpdate}       
                 />
            </div>

        )
    }



}

export default TodoList;