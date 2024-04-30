import { FC, ReactNode } from "react";
import cls from './MyButton.module.scss'
import { Button, ButtonProps } from "@mui/material";

interface MyButtonProps extends ButtonProps{
    className?: string
}

export const MyButton: FC<MyButtonProps> = ({className, ...rest}) => {

    return(
        <Button
        className={cls.MyButton}
        {...rest}
        >
        </Button>
    )
}