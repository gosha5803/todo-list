import React, { FC, useState } from "react";
import cls from './CreateTodoForm.module.scss'
import { CreateTodoFormProps } from "../model/types/create-todo-form-props";
import { Paper, Typography } from "@mui/material";
import { MyInput } from "../../../shared/ui/MyInput/ui/MyInput";
import { MyTableRow } from "shared/ui/MyTableRow/ui/MyTableRow";
import { TodoStatus } from "enteties/todo/model/types/todo-types";
import { CreateTodoStatus } from "./CreateTodoStatus/CreateTodoStatus";
import { MyDatePicker } from "shared/ui/MyDatePicker/ui/MyDatePicker";
import { MyButton } from "shared/ui/MyButton";
import { useActions } from "shared/hooks/redux/useTypedSelector";

export const CreateTodoForm: FC<CreateTodoFormProps> = ({}) => {
    const [todoTitle, setTodoTitle] = useState<string>('')
    const [deadline, setDeadLine] = useState<number>(0)
    const [todoStatus, setTodoStatus] = useState<TodoStatus>('В работе')
    const { createTodo } = useActions()

    const dateChangeHandler = (newValue: any) => {
        const timeStamp = new Date(newValue?.$d).getTime()
        setDeadLine(timeStamp)
    }

    const submitHandler = () => {
        if(!todoTitle) {
            return
        }
        createTodo({title: todoTitle, status: todoStatus ?? 'Не в работе', deadline: deadline ?? Date.now()})
        setTodoTitle('')
    }

    return(
        <div className={cls.CreateTodoForm}>
            <Paper variant="elevation" sx={{p: 2}}>
                <Typography variant="h6" mb={1}>Создать новую задачу</Typography>

                <MyTableRow elements={[
                        <MyInput value={todoTitle} placeholder="Новая задача" onInput={(ev: React.FormEvent<HTMLInputElement>) => setTodoTitle(((ev.target) as HTMLInputElement).value)}/>,
                        <CreateTodoStatus status={todoStatus} setStatus={setTodoStatus}/>,   
                        <MyDatePicker changeHandler={dateChangeHandler}/>,
                        <MyButton type="submit" color="success" variant="contained" onClick={submitHandler} className={cls['create-todo-submit-btn']}>
                            Создать
                        </MyButton>
                ]}/>
            </Paper>
        </div>
    )
}

// Рассуждения про архитектуру
{/*
У нас есть тудушки на сервере. Пагинацией мы получаем по десять штук туду с разных страниц. 
*/}