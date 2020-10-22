import React, { useState } from "react";

const Form = () => {


    const [inputText, setInputText] = useState("");



    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    return (
        <div>
            <form>
                <input onClick={inputTextHandler} type="text" className="todo-input"/>
                <button className="todo-button" type="submit">
                    <i clasName="fas fa-plus-square">AÑADIR</i>
                </button>
                
                <div className="slect">
                    <select name="todos" class="Filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;