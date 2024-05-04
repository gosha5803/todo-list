import type { TodoStatus } from "enteties/todo/model/types/todo-types"

export const getColor = (currentValue: TodoStatus): 'success' | 'error' | 'warning'  => {
    switch(currentValue) {
        case 'Не в работе':
            return 'error'
        case 'В работе':
            return 'warning'
        case 'Завершена':
            return 'success'
    }
}