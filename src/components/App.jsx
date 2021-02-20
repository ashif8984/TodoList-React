import React, { useState } from "react"

// const [item, addItem] = useState(0);




function App(){

        var [item, getItem] = useState(0);

        function add(){
            // item.push(item);
            // const item ++ ;
            // console.log(item);
            getItem(item+1);
        }

        const now = new Date().toLocaleTimeString();

        const [time , setTime] = useState(now);
    
    
        function getTime(){
          const newTime = new Date().toLocaleTimeString();
    
          setTime(newTime);
    
        }
    

    return (
        <div>
            <h1>Todo List App</h1>

            <input type="text" id="username" name="username" ></input>

            <button onClick={add}>Add</button> 
            <button onClick={getTime}>GetTIme</button> 
            <button>Clear</button>

            <ul>
                <li>{item}</li>
                <li>{time}</li>
            </ul>
        </div>

    )

}


export default App;

