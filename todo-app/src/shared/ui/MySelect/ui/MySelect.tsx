import { FC, ReactNode } from "react";
import cls from './MySelect.module.scss'
import { BaseSelectProps, FilledSelectProps, FormControl, InputLabel, MenuItemOwnProps, OutlinedSelectProps, Select, SelectChangeEvent, SelectProps, StandardSelectProps } from "@mui/material";
import MenuItem from '@mui/material/MenuItem'

interface MySelectProps extends BaseSelectProps {
    className?: string
    items: string[]
    onChange: (ev: SelectChangeEvent<unknown>) => void
}

export const MySelect: FC<MySelectProps> = ({items, placeholder, onChange, ...rest}) => {

    return(
        <FormControl className={cls['my-select-wrapper']}>
            <InputLabel id="select-label">{placeholder}</InputLabel>
            <Select 
            onChange={onChange}
            labelId="select-label" className={cls.MySelect} {...rest}>
                {items.map(item => <MenuItem key={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    )
}