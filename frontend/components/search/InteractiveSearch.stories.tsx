import type { Meta, StoryObj } from "@storybook/react";
import InteractiveSearch from './InteractiveSearch';

const meta: Meta<typeof InteractiveSearch> = {
    component: InteractiveSearch,
    // decorators: [
    //     (Story) => SessionDecorator(Story, session),
    // ],
}

export default meta;
type Story = StoryObj<typeof InteractiveSearch>

export const InteractiveSearchStory: Story = {}