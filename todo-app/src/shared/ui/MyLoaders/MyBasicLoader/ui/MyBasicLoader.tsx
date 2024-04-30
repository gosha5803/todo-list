import { FC } from "react";
import cls from './MyBasicLoader.module.scss'

interface MyBasicLoaderProps {
    className?: string
}

export const MyBasicLoader: FC<MyBasicLoaderProps> = ({className}) => {

    return(
        <span className={`${cls.MyBasicLoader}`}>
        </span>
    )
}