import { BaseTextFieldProps } from "@mui/material";
import { ReactNode } from "react";

export interface MyInputProps extends BaseTextFieldProps {
    className?: string
    placeholder?: string
    icon?: {
        icon: ReactNode
        position: 'start' | 'end'
    }
}