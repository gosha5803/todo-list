import { GridColDef } from "@mui/x-data-grid";
import { ITodoListColumns } from "../types/todo-list-types";

export const TodoListColumns: GridColDef<ITodoListColumns>[] = [
    {field: 'title', headerName: 'Задача', width: 150},
    {field: 'status', headerName: 'Статус', width: 150},
    {field: 'deadline', headerName: 'Срок', width: 150},
    {field: 'removeBtn', headerName: '', width: 10}
]