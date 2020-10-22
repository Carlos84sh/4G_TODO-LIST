import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "./style.css"

import Home from "./components/home.js"
import Form from "./components/form.js"
import TodoList from "./components/todoList.js"


const container = document.querySelector("#app");
const component = <Home />;

const formulario = document.querySelector("#formulario");
const componentForm = <Form />;

const todolist = document.querySelector("#todolist");
const componentTodolist = <TodoList />;

ReactDOM.render(component, container);
ReactDOM.render(componentForm, formulario);
ReactDOM.render(componentTodolist, todolist);