"use client";
import React, { useState } from "react";

type todos = {
    todo_item: string;
    is_editable: boolean;
    done: boolean;
};

function TodoList() {
    const [todo_text, set_todo_text] = useState("");
    const [todos, set_todos] = useState<todos[]>([]);
    const handleAddTodo = () => {
        set_todos([
            ...todos,
            {
                todo_item: todo_text,
                is_editable: false,
                done: false,
            },
        ]);
        set_todo_text("");
    };
    const handleDeleteTodo = (index: number) => {
        const new_todos = todos.filter((todo, todo_index) => index !== todo_index);
        set_todos(new_todos);
    };
    const handleEditTodo = (index: number) => {
        const editable_todos = [...todos];
        editable_todos[index].is_editable = true;
        set_todos(editable_todos);
    };
    const handleSaveTodo = (index: number) => {
        const editable_todos = [...todos];
        editable_todos[index].is_editable = false;
        set_todos(editable_todos);
    };
    const handleEditableTodo = (event: any, index: number) => {
        const new_todos = [...todos]
        new_todos[index].todo_item = event.target.value;
        set_todos(new_todos)
    }
    const handleMarkTodo = (event: any, index: number) => {
        const new_todos = [...todos];
        new_todos[index].done = event.target.checked;
        set_todos(new_todos)
    }
    return (
        <div>
            <p>Todo List</p>
            <div>
                <input
                    placeholder="add task"
                    type="text"
                    value={todo_text}
                    onChange={(event: any) => set_todo_text(event?.target.value)}
                    className="border-[0.5px] border-blue"
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            {todos.map((todo, index) => (
                <div className="flex flex-row gap-20" key={index}>
                    <input type="checkbox" checked={todo.done} onChange={(event: any) => handleMarkTodo(event, index)} />
                    {!todo.is_editable ? (
                        <>
                            {todo.todo_item}
                            <button onClick={() => handleEditTodo(index)}>Edit</button>
                        </>
                    ) : (
                        <>
                            <input type="text" value={todo.todo_item} onChange={(event: any) => handleEditableTodo(event, index)} />
                            <button onClick={() => handleSaveTodo(index)}>Save</button>
                        </>
                    )}
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>{" "}
                </div>
            ))}
            <button onClick={() => console.log(todos, "all todos")} >Save</button>
        </div>
    );
}

export default TodoList;
