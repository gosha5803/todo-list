import { FC } from "react";
import cls from './TodoListSkeleton.module.scss'
import { classNames } from "shared/lib/classNames";

interface TodoListSkeletonProps {
    className?: string
}

export const TodoListSkeleton: FC<TodoListSkeletonProps> = ({className}) => {

    return(
        <div className={classNames(cls.TodoListSkeleton, {}, [className])}>
        </div>
    )
}