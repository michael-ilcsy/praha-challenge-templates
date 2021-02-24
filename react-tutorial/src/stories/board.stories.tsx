import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'
import { Board } from "../index"

export default {
  title: 'Board',
  component: Board,
} as Meta

export const Default: Story = () => {
  const props = {
    squares: Array(9).fill(null),
    onClick: (i: number) => alert(`click ${i}`)
  }

  return <Board {...props} />
}

export const Triangle: Story = () => {
  const props = {
    squares: Array(9).fill('△'),
    onClick: (i: number) => alert(`click ${i}`)
  }

  return <Board {...props} />
}
