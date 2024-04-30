import { FC } from "react";
import cls from './TodoRow.module.scss'
import { TodoRowProps } from "../model/types/todo-row-types";
import { ButtonGroupPropsColorOverrides, ButtonPropsColorOverrides, Divider } from "@mui/material";
import { ITodo } from "enteties/todo/model/types/todo-types";
import { RemoveTodoBtn } from "features/RemoveTodoBtn/ui/RemoveTodoBtn";
import { MyButton } from "shared/ui/MyButton/ui/MyButton";
import { MySelect } from "shared/ui/MySelect/ui/MySelect";
import { MyMenu } from "shared/ui/MyMenu";
import { ChangeTodoStatus } from "features/changeTodoStatus";
import { MyTableRow } from "shared/ui/MyTableRow/ui/MyTableRow";
import { parseDate } from "shared/lib/DateHelpers/parseTimestamp";

export const TodoRow: FC<TodoRowProps> = ({todo}) => {
    
    const todoRowElements = Object.entries(todo).map(([key, value]) => {
        if(key === 'id') {
            return 
        } else if(key === 'status') {
            return (<ChangeTodoStatus currentValue={value} todoId={todo.id}/>)
        } else if(key === 'deadline') {
            return parseDate(value)
        }else {
            return value
        }
    }
    )

    return(
        <div className={cls.TodoRow}>
            <MyTableRow elements={todoRowElements}/>
        </div>
    )
}