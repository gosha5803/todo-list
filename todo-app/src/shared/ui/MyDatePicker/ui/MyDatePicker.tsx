import { FC } from "react";
import cls from './MyDatePicker.module.scss'
import { classNames } from "shared/lib/classNames";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface MyDatePickerProps {
    className?: string
    changeHandler: (value: any) => void
}

export const MyDatePicker: FC<MyDatePickerProps> = ({className, changeHandler}) => {

    return(
        <div className={classNames(cls.MyDatePicker, {}, [className])}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={changeHandler} />
            </LocalizationProvider>
        </div>
    )
}