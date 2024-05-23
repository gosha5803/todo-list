import { FC } from "react";
import cls from './MyButton.module.scss'
import { Button, ButtonProps } from "@mui/material";
import { classNames } from "shared/lib/classNames";
import type { MUIBasicColors } from "shared/ui/MyInput/model/types/my-input-types";

export interface MyButtonProps extends ButtonProps {
    className?: string
    color?: MUIBasicColors
}

export const MyButton: FC<MyButtonProps> = ({className, color = 'primary', ...rest}) => {
    return(
        <Button data-testid='my-btn' color={color} className={classNames(cls.MyButton, {}, [className])} {...rest}>
        </Button>
    )
}