import { Meta, StoryObj } from "@storybook/react";
import { MyBasicLoader } from "../../ui/MyBasicLoader";
import type { MyBasicLoaderProps } from '../../ui/MyBasicLoader'

const meta = {
    title: 'Example/MyBasicLoader',
    component: MyBasicLoader,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        
    }
} satisfies Meta<MyBasicLoaderProps>

export default meta

type Story = StoryObj<typeof meta>

export const BasicLoader: Story = {
    render: (() => {
        return(
            <MyBasicLoader/>
        )
    })
}