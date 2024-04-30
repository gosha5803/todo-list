import { FC } from "react";
import cls from './ChangeTodoStatus.module.scss'
import { MyMenu } from "shared/ui/MyMenu";
import { useChangeTodoStatusMutation } from "widgets/TodoList/api/todoListApi";

interface ChangeTodoStatusProps {
    className?: string
    currentValue: 'Не в работе' | 'В работе' | 'Завершена'
    todoId: string
}

export const ChangeTodoStatus: FC<ChangeTodoStatusProps> = ({className, currentValue, todoId}) => {
    const [changeTodoStatus, {isLoading}] = useChangeTodoStatusMutation()

    const getColor = (): 'success' | 'error' | 'warning'  => {
        switch(currentValue) {
            case 'Не в работе':
                return 'error'
            case 'В работе':
                return 'warning'
            case 'Завершена':
                return 'success'
        }
    }

    const changeStatusItems = [
        {title: 'Не в работе', action: () => {changeTodoStatus({status: 'Не в работе', id: todoId})}},
        {title: 'В работе', action: () => {changeTodoStatus({status: 'В работе', id: todoId})}},
        {title: 'Звершена', action: () => {changeTodoStatus({status: 'Завершена', id: todoId})}}
    ]

    return(
        <div className={cls.ChangeTodoStatus}>
            <MyMenu
            menuItems={changeStatusItems} menuButton={{btnSettings: {text: currentValue, color: getColor(), variant: 'contained'}}}/>
        </div>
    )
}