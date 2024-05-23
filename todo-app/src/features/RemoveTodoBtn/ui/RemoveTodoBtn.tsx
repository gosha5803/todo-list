import { FC } from "react";
import cls from './RemoveTodoBtn.module.scss'
import { IconButton } from "@mui/material";
import {  RemoveCircle } from "@mui/icons-material";
import { useActions } from "shared/hooks/redux/useTypedSelector";

interface RemoveTodoBtnProps {
    className?: string
    todoId: string
}

export const RemoveTodoBtn: FC<RemoveTodoBtnProps> = ({todoId}) => {
    const { removeTodo } = useActions()

    return(
            <IconButton data-testid='remove-btn' onClick={() => removeTodo(todoId)} color='error' className={cls.RemoveTodoBtn}>
                <RemoveCircle/>
            </IconButton>
    )
}