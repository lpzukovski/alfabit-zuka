import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-zuka/typography';

type TypographyArgsAndCustomArgs = TypographyComponent & { text: string };

const meta: Meta<TypographyArgsAndCustomArgs> = {
  component: TypographyComponent,
  args: {
    text: 'Text',
  },
  render: ({ text, ...typographyArgs }) => ({
    props: typographyArgs,
    template: `
      <ab-typography ${argsToTemplate(typographyArgs)}>
        ${text}
      </ab-typography>
    `,
  }),
  parameters: {
    controls: {
      include: ['variant', 'size', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<TypographyArgsAndCustomArgs>;

export const Title1: Story = {
  args: {
    variant: 'title1',
  },
};

export const Title2: Story = {
  args: {
    variant: 'title2',
  },
};

export const Title3: Story = {
  args: {
    variant: 'title3',
  },
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
  },
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
  },
};

export const TextLarge: Story = {
  args: {
    variant: 'normal',
  },
};

export const TextMedium: Story = {
  args: {
    ...TextLarge.args,
    size: 'md',
  },
};

export const TextSmall: Story = {
  args: {
    ...TextLarge.args,
    size: 'sm',
  },
};

export const TextExtraSmall: Story = {
  args: {
    ...TextLarge.args,
    size: 'xs',
  },
};

export const Title2WithMediumSize: Story = {
  args: {
    ...Title2.args,
    size: 'md',
  },
};

export const Paragraph: Story = {
  args: {
    ...TextLarge.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <p>
        <ab-typography ${argsToTemplate(args)}>
          Novo conteúdo
        </ab-typography>
      </p>
    `,
  }),
};
