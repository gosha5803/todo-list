import { Meta, StoryObj } from "@storybook/react";
import { MyInput } from "../../ui/MyInput";
import { MyInputProps } from "../types/my-input-types";
import { AccessAlarm, Search } from "@mui/icons-material";
import { useState } from "react";

const meta = {
    title: 'Example/MyInput',
    component: MyInput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {control: 'select', options: ['outlined', 'filled', 'standard']},
        color: { control: 'select', options: ['error', 'success', 'secondary', 'primary', 'info', 'warning']},
        helperText: {control: 'text'},
        error: {control: 'boolean', description: 'boolean'},
        placeholder: {control: 'text'}
    },
    
    args:{}
} satisfies Meta<MyInputProps>

export default meta

type Story = StoryObj<typeof meta>

export const FilledWithIcon: Story = {
    args: {
        color: 'primary',
        variant: 'standard',
        placeholder: 'Search icon',
        icon: {position: 'start', icon: <Search/>}
    }
}

export const OutlinedError: Story = {
    args: {
        color: 'primary',
        variant: 'outlined',
        placeholder: 'For validation',
        error: true,
        helperText: 'Some Error!'
    }
}

export const ControlledStandart: Story = {
    args: {
        color: 'primary',
        variant: 'outlined',
        placeholder: 'Any value',
        icon: {icon: <AccessAlarm/>, position: 'end'}
    },
    render: ({...props}) => {
        const [value, setValue] = useState<string>('')
        
        return (
            <>  
                <h1 style={{color: 'orange'}}>Value is: {value}</h1>
                <MyInput {...props} value={value} onInput={(ev) => setValue((ev.target as HTMLInputElement).value)}/>
            </>
        )
    },
}