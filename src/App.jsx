import React, { useState } from 'react';
import ToDoList from "./ToDOListoList";

const App = () => {
    const [inputList, setInputList] = useState();
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList("")
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} />

                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {Items.map((itemval , index) => {
                            return <ToDoList key={index} id={index} text={itemval} />;
                        })}
                    </ol>
                </div>
            </div>
        </>

    );
};

export default App;


