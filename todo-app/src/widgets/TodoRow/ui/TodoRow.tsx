import { FC } from "react";
import cls from './TodoRow.module.scss'
import type { TodoRowProps } from "../model/types/todo-row-types";
import { ChangeTodoStatus } from "features/changeTodoStatus";
import { MyTableRow } from "shared/ui/MyTableRow/ui/MyTableRow";
import { parseDate } from "shared/lib/DateHelpers/parseTimestamp";
import { RemoveTodoBtn } from "features/RemoveTodoBtn";

export const TodoRow: FC<TodoRowProps> = ({todo}) => {
    const todoRowElements = Object.entries(todo).map(([key, value]) => {
        if(key === 'id') {
            return 
        } else if(key === 'status') {
            return (<ChangeTodoStatus currentValue={value} todoId={todo.id}/>)
        } else if(key === 'deadline') {
            return parseDate(value)
        } else {
            return value
        }
    }
    )

    return(
        <div className={cls.TodoRow}>
            <MyTableRow elements={[...todoRowElements, <RemoveTodoBtn todoId={todo.id}/>]}/>
        </div>
    )
}