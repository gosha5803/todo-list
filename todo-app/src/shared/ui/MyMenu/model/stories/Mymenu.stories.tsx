import { Meta, StoryObj } from "@storybook/react";
import { MyMenu } from "../../ui/MyMenu";
import { MyMenuProps } from "../types/my-menu-props";
import { GetApp, Search } from "@mui/icons-material";

const meta = {
    title: 'Example/MyMenu',
    component: MyMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
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