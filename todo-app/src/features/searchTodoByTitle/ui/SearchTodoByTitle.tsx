import { FC, useState } from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { ITodo } from "enteties/todo/model/types/todo-types";
import { getTodosTitles } from "../model/helpers/getTodosTitles";
import { useActions, useTypedSelector } from "shared/hooks/redux/useTypedSelector";
import { getMatchingTodos } from "../api/getAllTodos";
import { debounce } from "../model/helpers/debounce";
import type { SearchTodoByTitleProps } from "../model/types/search-by-title-props";

export const SearchTodoByTitle: FC<SearchTodoByTitleProps> = ({scrollIntoView}) => {
    const [suggestedTodos, setSuggestedTodos] = useState<ITodo[]>([])
    const { getTodoByTitle, fetchTodos, setTodos} = useActions()
    const { todos } = useTypedSelector(state => state.todosReducer)
    const [isLoading, setIsLoading] = useState<boolean>(false)

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
        if(!!value){
            setIsLoading(true)
            getMatchingTodos(value)
            .then(todos => setSuggestedTodos(todos))
            .finally(() => setIsLoading(false))
        }
    }

    const debouncedInputHandler = debounce(inputHandler, 1000)

    return(
        <div>
            <Autocomplete 
            loading={isLoading}
            onInputChange={(ev) => debouncedInputHandler((ev.target as HTMLInputElement).value)}
            onChange={(_ev, selectedTitle) => selectHandler(selectedTitle)} options={getTodosTitles(suggestedTodos)} renderInput={params => 
                <TextField
                {...params}
                label="Asynchronous"
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                    <>
                        {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                    </>
                    ),
                }}
                />}
            />
        </div>
    )
}