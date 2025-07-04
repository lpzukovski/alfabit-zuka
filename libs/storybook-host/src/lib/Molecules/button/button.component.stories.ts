import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@alfabit-zuka/button';

type ButtonInputsAndCustomArgs = ButtonComponent & { text: string };

const meta: Meta<ButtonInputsAndCustomArgs> = {
  component: ButtonComponent,
  args: {
    text: 'Action',
  },
  render: (args) => ({
    props: args,
    template: `
      <ab-button ${argsToTemplate(args)}>
        Action
      </ab-button>
    `,
  }),
  parameters: {
    controls: {
      exclude: ['getClasses'],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    theme: 'blue',
  },
};
export const PrimaryButtonDisabled: Story = {
  args: {
    ...PrimaryButton.args,
    disabled: true,
  },
};
export const SecondaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'secondary',
  },
};
export const SecondaryButtonDisabled: Story = {
  args: {
    ...PrimaryButtonDisabled.args,
    variant: 'secondary',
  },
};
export const TertiaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'tertiary',
  },
};
export const TertiaryButtonDisabled: Story = {
  args: {
    ...PrimaryButtonDisabled.args,
    variant: 'tertiary',
  },
};
export const PrimaryButtonViolet: Story = {
  args: {
    ...PrimaryButton.args,
    theme: 'violet',
  },
};
export const PrimaryButtonDisabledViolet: Story = {
  args: {
    ...PrimaryButtonDisabled.args,
    theme: 'violet',
  },
};
export const SecondaryButtonViolet: Story = {
  args: {
    ...SecondaryButton.args,
    theme: 'violet',
  },
};
export const SecondaryButtonDisabledViolet: Story = {
  args: {
    ...SecondaryButtonDisabled.args,
    theme: 'violet',
  },
};
export const TertiaryButtonViolet: Story = {
  args: {
    ...TertiaryButton.args,
    theme: 'violet',
  },
};
export const TertiaryButtonDisabledViolet: Story = {
  args: {
    ...TertiaryButtonDisabled.args,
    theme: 'violet',
  },
};
