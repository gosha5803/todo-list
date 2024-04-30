import React, { FC, useState } from "react";
import cls from './CreateTodoForm.module.scss'
import { CreateTodoFormProps } from "../model/types/create-todo-form-props";
import { MyButton } from "../../../shared/ui/MyButton/ui/MyButton";
import { FormControl, IconButton, Paper, SelectChangeEvent } from "@mui/material";
import { Done } from "@mui/icons-material";
import { MyInput } from "../../../shared/ui/MyInput/ui/MyInput";
import { createTodo } from "../model/api/createTodo";
import { useAddTodoMutation } from "widgets/TodoList/api/todoListApi";
import { MyTableRow } from "shared/ui/MyTableRow/ui/MyTableRow";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MySelect } from "shared/ui/MySelect/ui/MySelect";
import { TodoStatus } from "enteties/todo/model/types/todo-types";

export const CreateTodoForm: FC<CreateTodoFormProps> = ({className}) => {
    const [todoTitle, setTodoTitle] = useState<string>('')
    const [deadline, setDeadLine] = useState<number>()
    const [todoStatus, setTodoStatus] = useState<TodoStatus | undefined>()
    const [addTodo] = useAddTodoMutation()

    const dateChangeHandler = (newValue: any) => {
        const timeStamp = new Date(newValue?.$d).getTime()
        setDeadLine(timeStamp)
    }

    const statusChangeHandler = (ev: SelectChangeEvent<unknown>) => {
        console.log('todoStatus')
        const newValue = ev.target.value
        setTodoStatus(newValue as TodoStatus)
    }

    const clickHandler = () => {
        addTodo({title: todoTitle, status: todoStatus ?? 'Не в работе', deadline})
        setTodoTitle('')
    }

    return(
        <div className={cls.CreateTodoForm}>
            <Paper variant="elevation">
                <MyTableRow elements={[
                        <MyInput value={todoTitle} placeholder="Новая задача" onChange={ev => setTodoTitle(ev.target.value)}/>,
                        <MySelect variant="filled" value={todoStatus} onChange={statusChangeHandler} placeholder="Статус" items={['В работе', 'Не в работе', 'Завершена']}/>,
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker value={deadline} onChange={dateChangeHandler}/>
                        </LocalizationProvider>,
                        <IconButton type="submit" onClick={clickHandler} className={cls['create-todo-submit-btn']}>
                            <Done color="success"/>
                        </IconButton>
                ]}/>
            </Paper>
        </div>
    )
}