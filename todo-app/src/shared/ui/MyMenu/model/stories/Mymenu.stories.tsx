import { Meta, StoryObj } from "@storybook/react";
import { MyMenu } from "../../ui/MyMenu";
import { MyMenuItem, MyMenuProps } from "../types/my-menu-props";
import { MyButton } from "shared/ui/MyButton";
import { ErrorOutline, GetApp, HelpOutline, Search } from "@mui/icons-material";
import { useState } from "react";
import { MUIBasicColors } from "shared/ui/MyInput/model/types/my-input-types";
import { Alert } from "@mui/material";

const meta = {
    title: 'Example/MyMenu',
    component: MyMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof MyMenu>

export default meta

type Story = StoryObj<MyMenuProps>

export const WithButton: Story = {
    args: {
        menuButton: {
            variant: 'contained',
            color: 'warning',
            endIcon: <Search/>,
            children: 'Меню'
        },
        menuItems: [
            {title: 'Alert', action: () => alert('First action')},
            {title: 'Prompt', action: () => prompt('Second action'), icon: <GetApp/>}
        ]
    }
}