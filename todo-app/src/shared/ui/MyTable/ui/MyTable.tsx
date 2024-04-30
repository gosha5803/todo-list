import { FC } from "react";
import cls from './MyTable.module.scss'
import { TableProps } from "@mui/material";
import { DataGrid, DataGridProps } from '@mui/x-data-grid'

interface MyTableProps extends DataGridProps {
    className?: string
}

export const MyTable: FC<MyTableProps> = ({className, ...rest}) => {

    return(
        <DataGrid {...rest}>
        </DataGrid>
    )
}