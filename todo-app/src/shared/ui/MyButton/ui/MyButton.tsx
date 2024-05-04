import { FC } from "react";
import cls from './MyButton.module.scss'
import { Button, ButtonProps } from "@mui/material";
import { classNames } from "shared/lib/classNames";

export interface MyButtonProps extends ButtonProps {
    className?: string
}

export const MyButton: FC<MyButtonProps> = ({className, color = 'primary', ...rest}) => {

    return(
        <Button color={color} className={classNames(cls.MyButton, {}, [className])} {...rest}>
        </Button>
    )
}