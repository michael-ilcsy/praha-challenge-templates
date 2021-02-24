import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'
import { Game } from "../index"

export default {
  title: 'Game',
  component: Game,
} as Meta

export const Default: Story = () => <Game/>
