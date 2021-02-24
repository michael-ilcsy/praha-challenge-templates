import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'
import { Square } from "../index"

export default {
  title: 'Square',
  component: Square,
} as Meta

export const Default: Story = () => {
  const props = {
    value: 'O',
    onClick: () => alert('click')
  }
  
  return <Square {...props} />
}
