import { FC } from "react";
import cls from './RemoveTodoBtn.module.scss'
import { IconButton } from "@mui/material";
import {  RemoveCircle } from "@mui/icons-material";
import { useRemoveTodoMutation } from "widgets/TodoList/api/todoListApi";
import { MyBasicLoader } from "shared/ui/MyLoaders/MyBasicLoader/ui/MyBasicLoader";

interface RemoveTodoBtnProps {
    className?: string
    todoId: string
}

export const RemoveTodoBtn: FC<RemoveTodoBtnProps> = ({className, todoId}) => {
    const [removeTodo, {isLoading}] = useRemoveTodoMutation()

    return(
        <IconButton onClick={() => removeTodo(todoId)} color='error' className={cls.RemoveTodoBtn}>
            {isLoading ? <MyBasicLoader className={cls['remove-btn-loader']}/> : <RemoveCircle/>}
        </IconButton>
    )
}