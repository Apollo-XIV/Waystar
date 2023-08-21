import type { Meta, StoryObj } from "@storybook/react";
import UserBox from './UserBox';
import { Session } from "next-auth";
import AuthCtx from "../AuthCtx";

const session: Session = {
    user: {
        name: "Alex",
        email: "Not a real Email",
        image: "not a real image"
    },
    expires: (new Date('05 October 2011 14:48 UTC')).toISOString(),
    accessToken: ""
}

const meta: Meta<typeof UserBox> = {
    component: UserBox,
    // decorators: [
    //     (Story) => SessionDecorator(Story, session),
    // ],
}

export default meta;
type Story = StoryObj<typeof UserBox>

export const UserBoxStory: Story = {
    args: {
        
    }
}

UserBoxStory.parameters = {
    nextAuthMock: {
        // title: 'user authenticated',
        // session: {
        //     data: {
        //         user: {
        //                 id: 999,
        //                 name: 'Alex Crease',
        //                 email: 'user@local',
        //                 image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/800px-Anas_platyrhynchos_male_female_quadrat.jpg'
        //         },
        //         expires: "test"
        //     },
        //     status: "authenticated"
        // }
    }
}
