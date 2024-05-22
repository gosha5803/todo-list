import type { TodoStatus } from "enteties/todo/model/types/todo-types";
import { describe, test, expect } from "vitest";
import { getColor } from "../helpers/getColorByValue";
import { changeTodoStatusArgs } from "../helpers/changeTodoStatusCreator";

describe('Features/helpers', () => {
    test('GetColorValue Should return matching color', () => {
        var status:TodoStatus = 'В работе'

        expect(getColor(status)).toBe('warning')

        status = 'Завершена'
        expect(getColor(status)).toBe('success')
        
        status = 'Не в работе'
        expect(getColor(status)).toBe('error')
    })

    // test('Change todoStatusCreator', () => {
    //     var result = changeTodoStatusArgs('В работе', '1')
    //     console.log(result)
    // })
})