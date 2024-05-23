import { FC, useEffect, useRef, useState } from "react";
import cls from './TodoList.module.scss'
import { TodoRow } from "widgets/TodoRow";
import { Paper, Typography } from "@mui/material";
import { MyTableRow } from "shared/ui/MyTableRow/ui/MyTableRow";
import { SearchTodoByTitle } from "features/searchTodoByTitle";
import { useActions, useTypedSelector } from "shared/hooks/redux/useTypedSelector";
import { Virtuoso } from 'react-virtuoso'
import { ITodo } from "enteties/todo/model/types/todo-types";
import { addNewTodo, todosReducer } from "enteties/todo/model/state/todos-slice";
import { useDispatch } from "react-redux";

interface TodoListProps {
    className?: string
}

export const TodoList: FC<TodoListProps> = () => {
    const { todos, maxPage } = useTypedSelector(state => state.todosReducer)
    const { fetchTodos } = useActions()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const virtuosso = useRef(null)
    
    useEffect(() => {
        fetchTodos(currentPage)
    }, [currentPage])

    const scrollIntoView = (index: number) => { 
        if(virtuosso.current) {
            //@ts-ignore
            virtuosso.current.scrollToIndex({index, behavior: 'smooth'})
        }
    }

    const increasePage = () => todos.length === 1 ? '' :setCurrentPage(prev => prev === maxPage ? prev : prev + 1)

    return(
        <div className={cls['todo-list-wrapper']}>
            <Paper sx={{width: '100%', mb: 1, p: 2}}>
                <Typography variant="h6">Поиск по задачам</Typography>
                <MyTableRow elements={[<SearchTodoByTitle scrollIntoView={scrollIntoView}/>]}/>
            </Paper>
            <Paper elevation={10} variant="elevation" style={{width: '100%', padding: '1rem'}}>
                <MyTableRow elements={['Задача', 'Статус', 'Срок выполнения', ' ']}/>
                {/* {<Virtuoso
                    ref={virtuosso}
                    style={{height: '400px'}}
                    data={todos}
                    itemContent={(_index, todo: ITodo) => 
                        <TodoRow todo={todo}/>
                    }
                    endReached={() => increasePage()}
                    />} */}
                    {
                        todos.map(todo => <TodoRow data-testid="todo-item" key={todo.id} todo={todo}/>)
                    }
            </Paper>
        </div>
    )
}