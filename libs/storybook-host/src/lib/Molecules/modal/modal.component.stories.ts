import { argsToTemplate, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ModalComponent } from '@alfabit-zuka/modal';
import { ButtonComponent } from '@alfabit-zuka/button';
import { TypographyComponent } from '@alfabit-zuka/typography';

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, TypographyComponent]
    })
  ],
  render: (args) => ({
    props: args,
    template: `
      <ab-modal ${argsToTemplate(args)}>
        <p>
          <ab-typography>
            Today, every company I talk to wants to implement a design system from
            scratch. Unfortunately, the details of a design system are not
            explored, so often they are not used to the maximum to create a useful
            user experience.
          </ab-typography>
        </p>

        <ab-button>Primary button</ab-button>
      </ab-modal>
    `,
  }),
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Open: Story = {
  args: {
    modalTitle: 'Heading',
    isOpen: true,
  },
};
