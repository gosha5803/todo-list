import { IconButtonProps } from "@mui/material"
import type { MyButtonProps } from "shared/ui/MyButton/ui/MyButton"

export interface MyMenuProps {
    menuItems: MyMenuItem[]
    menuButton?: MyButtonProps
    iconButton?: IconButtonProps
    position?: {left: number, top: number} | undefined
    className?: string
}

export interface MyMenuItem {
    title: string
    icon?: React.ReactNode
    action: () => void
}