import { AppStore } from "shared/store";

export var getTodos = (state:AppStore) => state.todosReducer.todos
export var getIsLoading = (state:AppStore) => state.todosReducer.isLoading