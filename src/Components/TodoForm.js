import React, {useState, useContext} from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import {v4} from 'uuid';

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please Enter a todo !");
        }

        const todo = {
            todoString,
            id: v4()
        }

        addTodos(todo);

        setTodoString("");
    };



    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your Next Todo"
                    value={todoString}
                    onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                        color="success"
                        //TODO: onClick
                        >Add
                        </Button>
                    </InputGroupAddon>
                    </InputGroup>
            </FormGroup>
        </Form>
    );
};

export default TodoForm;