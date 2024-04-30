import { FC } from "react";
import cls from './MyTableRow.module.scss'
import { classNames } from "shared/lib/classNames";
import { Divider } from "@mui/material";

interface MyTableRowProps {
    className?: string,
    elements: any[]
}

export const MyTableRow: FC<MyTableRowProps> = ({className, elements}) => {

    return(
        <div
        className={classNames(cls.MyTableRow, {}, [className])}
        >   
            {elements.map((element, index) => {
                if (!!element){
                    return(
                        <div key={index} className={cls['todo-row-item-wrapper']}>
                         {/* key={index} className={cls['todo-row-item-wrapper']}> */}
                            <div className={cls['todo-row-item']}>
                                {element}
                            </div>
                            {/* {index < elements.length -1 ? 
                            <Divider flexItem orientation='vertical'/> : ''} */}
                        </div>)
                    }
                }
            )}
        </div>
    )
}