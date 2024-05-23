import { FC } from "react";
import cls from './ChangeTodoStatus.module.scss'
import { MyMenu } from "shared/ui/MyMenu";
import { changeTodoStatusArgs } from "../model/helpers/changeTodoStatusCreator";
import { getColor } from "../model/helpers/getColorByValue";
import type { TodoStatus } from "enteties/todo/model/types/todo-types";
import type { ChangeTodoStatusProps } from "../model/types/change-todo-status-props";

export const ChangeTodoStatus: FC<ChangeTodoStatusProps> = ({currentValue, todoId}) => {
    const statuses:TodoStatus[] = ['Не в работе', 'В работе', 'Завершена']
    const changeStatusItems = statuses.map((status: TodoStatus) => changeTodoStatusArgs(status, todoId))

    return(
        <div className={cls.ChangeTodoStatus}>
            <div>
                <MyMenu 
                menuItems={changeStatusItems} 
                menuButton={{
                    color: getColor(currentValue),
                    children: currentValue,
                    variant: 'contained',
                    className: cls['change-todo-btn']
                }}/>
            </div>
        </div>
    )
}