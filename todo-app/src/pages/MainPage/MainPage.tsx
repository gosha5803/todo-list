import { FC } from "react";
import cls from './MainPage.module.scss'
import { CreateTodoForm } from "../../widgets/CreateTodoForm";
import { TodoList } from "widgets/TodoList/index";

interface MainPageProps {
    className?: string
}

const MainPage: FC<MainPageProps> = ({className}) => {

    return(
        <div
        className={cls.MainPage}
        >
            <CreateTodoForm/>
            <TodoList/>
        </div>
    )
}

export default MainPage