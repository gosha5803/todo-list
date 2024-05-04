import { FC } from "react";
import cls from './MainPage.module.scss'
import { CreateTodoForm } from "../../widgets/CreateTodoForm";
import { TodoList } from "widgets/TodoList";
import { CircularProgress } from "@mui/material";
import { useTypedSelector } from "shared/hooks/redux/useTypedSelector";

interface MainPageProps {
    className?: string
}

const MainPage: FC<MainPageProps> = ({className}) => {
    const {isLoading} = useTypedSelector(state => state.todosReducer)

    return(
        <div className={cls.MainPage}>
            {isLoading && <CircularProgress className={cls['main-page-loader']}/>}
            <CreateTodoForm/>
            <TodoList/>
        </div>
    )
}

export default MainPage