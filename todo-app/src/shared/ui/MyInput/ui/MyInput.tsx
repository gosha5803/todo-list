import { FC } from "react";
import cls from './MyInput.module.scss'
import { InputAdornment, TextField } from '@mui/material'
import { MyInputProps } from "../model/types/my-input-types";

export const MyInput: FC<MyInputProps> = ({className, placeholder, icon, ...rest}) => {

    return(
        <TextField
        className={cls.MyInput}
        placeholder={placeholder}
        label={placeholder}
        InputProps={
            icon ? {
            [`${icon?.position}Adornment`]: (
              <InputAdornment position={icon?.position ?? 'start'}>
                {icon?.icon}
              </InputAdornment>
            ),
          }
        : {}}
        {...rest}>
        </TextField>
    )
}