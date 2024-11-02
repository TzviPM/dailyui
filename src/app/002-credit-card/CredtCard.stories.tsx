import type { Meta, StoryObj } from '@storybook/react';

import { CreditCard } from './CredtCard';

const meta = {
  component: CreditCard,
} satisfies Meta<typeof CreditCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};