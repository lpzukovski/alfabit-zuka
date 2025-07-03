import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@alfabit-zuka/input';

const meta: Meta<InputComponent> = {
  component: InputComponent
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multiline: false,
    label: '',
    id: '', 
    disabled: false,
  },
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: true,
    id: '1'
  },
};

export const PrimaryWithLabel: Story = {
  args: {
    ...Primary.args,
    label: 'Label',
    id: '2'
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Multiline.args,
    label : 'Label',
    id: '3'
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
    id: '4'
  },
};

export const MultilineDisabled: Story = {
  args: {
    ...Multiline.args,
    disabled: true,
    id: '5'
  },
};

export const PrimaryWithLabelDisabled: Story = {
  args: {
    ...PrimaryWithLabel.args,
    disabled: true,
    id: '6'
  },
};

export const MultilineWithLabelDisabled: Story = {
  args: {
    ...MultilineWithLabel.args,
    disabled: true,
    id: '7'
  },
};