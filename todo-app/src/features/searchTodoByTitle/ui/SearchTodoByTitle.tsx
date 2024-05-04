import { FC, useState } from "react";
import { Autocomplete } from "@mui/material";
import { ITodo } from "enteties/todo/model/types/todo-types";
import { getTodosTitles } from "../model/helpers/getTodosTitles";
import { MyInput } from "shared/ui/MyInput/ui/MyInput";
import { useActions, useTypedSelector } from "shared/hooks/redux/useTypedSelector";
import { getMatchingTodos } from "../model/services/getAllTodos";
import { debounce } from "../model/helpers/debounce";
import type { SearchTodoByTitleProps } from "../model/types/search-by-title-props";

export const SearchTodoByTitle: FC<SearchTodoByTitleProps> = ({scrollIntoView}) => {
    const [suggestedTodos, setSuggestedTodos] = useState<ITodo[]>([])
    const { getTodoByTitle, fetchTodos, setTodos} = useActions()
    const { todos } = useTypedSelector(state => state.todosReducer)

    const selectHandler = (selectedTitle: string | null) => {
        if(!selectedTitle) {
            setTodos([])
            fetchTodos(1)
        } else {
            const targetIndex = todos.findIndex(todo => todo.title === selectedTitle)
            if(targetIndex !== -1) {
                scrollIntoView(targetIndex)
            } else {
                selectedTitle && getTodoByTitle(selectedTitle)
            }
        }
    }

    const inputHandler = (value: string) => {
        if(!!value)
        getMatchingTodos(value)
            .then(todos => setSuggestedTodos(todos))
    }

    const debouncedInputHandler = debounce(inputHandler, 500)

    return(
        <div>
            <Autocomplete 
            onInputChange={(ev) => debouncedInputHandler((ev.target as HTMLInputElement).value)}
            onChange={(_ev, selectedTitle) => selectHandler(selectedTitle)} options={getTodosTitles(suggestedTodos)} renderInput={params => <MyInput {...params} variant="outlined" placeholder="Название задачи"/>}/>
        </div>
    )
}