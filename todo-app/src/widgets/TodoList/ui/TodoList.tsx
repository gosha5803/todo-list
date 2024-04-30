import { FC } from "react";
import cls from './TodoList.module.scss'
import { useGetTodosQuery } from "../api/todoListApi";
import { MyTable } from "shared/ui/MyTable/ui/MyTable";
import { TodoListColumns } from "../model/constants/todo-list-constants";
import { ITodo } from "enteties/todo/model/types/todo-types";
import { ITodoListColumns } from "../model/types/todo-list-types";
import { RemoveTodoBtn } from "features/RemoveTodoBtn/ui/RemoveTodoBtn";
import { TodoRow } from "widgets/TodoRow";
import { Card, InputAdornment, Paper } from "@mui/material";
import { MyTableRow } from "shared/ui/MyTableRow/ui/MyTableRow";
import { MyInput } from "shared/ui/MyInput/ui/MyInput";
import { AccountCircle, Search } from "@mui/icons-material";

interface TodoListProps {
    className?: string
}

export const TodoList: FC<TodoListProps> = () => {
    const {data: todos, isLoading, error} = useGetTodosQuery()

    // const rows: ITodoListColumns[] | undefined = todos?.map(todo => ({...todo, removeBtn: <RemoveTodoBtn/>}))
    return(
        <Paper elevation={10} variant="elevation" style={{width: '50rem', padding: '1rem'}}>
            <MyTableRow elements={['Задача', 'Статус', 'Срок выполнения']}/>
            <div className={cls['todo-list-wrapper']}>
            {/* <MyTableRow elements={[<MyInput placeholder="Поиск по задачам"/>, '', '']} className={cls['inputs-table-row']}/> */}
                {error && <h1 style={{color: 'red'}}>Error</h1>}
                {isLoading ? <h1>Loading...</h1> : 
                <>
                    {todos?.length ? todos.map(todo => <TodoRow key={todo.id} todo={todo}/>) : <h2>No todos yet</h2>}
                </>}
            </div>
        </Paper>
    )
}