import { Dispatch, FC, SetStateAction } from "react";
import cls from './CreateTodoStatus.module.scss'
import { classNames } from "shared/lib/classNames";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TodoStatus } from "enteties/todo/model/types/todo-types";

interface CreateTodoStatusProps {
    className?: string
    status: TodoStatus
    setStatus: Dispatch<SetStateAction<TodoStatus>>
}

export const CreateTodoStatus: FC<CreateTodoStatusProps> = ({className, status, setStatus}) => {

    return(
        <div className={classNames(cls.CreateTodoStatus, {}, [className])}>
            <FormControl sx={{width: '80%'}}>
                <InputLabel>Статус</InputLabel>
                <Select variant="outlined" value={status} onChange={ev => setStatus((ev.target.value as TodoStatus))} label="Статус">
                {['В работе', 'Не в работе', 'Завершена'].map(item => 
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                )}
                </Select>
            </FormControl>
        </div>
    )
}