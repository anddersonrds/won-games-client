import { Story, Meta } from '@storybook/react/types-6-0';
import Menu from './index';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Default: Story = () => <Menu />;
