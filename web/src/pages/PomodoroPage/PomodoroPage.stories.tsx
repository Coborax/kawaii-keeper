import type { Meta, StoryObj } from '@storybook/react'

import PomodoroPage from './PomodoroPage'

const meta: Meta<typeof PomodoroPage> = {
  component: PomodoroPage,
}

export default meta

type Story = StoryObj<typeof PomodoroPage>

export const Primary: Story = {}
