import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-zuka/typography';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
  render: (args)=> ({
    props: args,
    template: `
      <ab-typography ${argsToTemplate(args)}>
        Text
      </ab-typography>
    `
  })
};
export default meta;
type Story = StoryObj<TypographyComponent>;

export const Primary: Story = {
  args: {
    variant: 'title1'
  },
};
