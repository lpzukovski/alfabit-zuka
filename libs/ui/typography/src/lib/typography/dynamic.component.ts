import { Component, Input } from "@angular/core";

export type Size =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs';

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h1 class="typography {{ size }}">
      <ng-content/>
    </h1>
  `,
})
export class H1Component {
    @Input()
    size!: Size;
}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h2 class="typography {{ size }}">
      <ng-content/>
    </h2>
  `,
})
export class H2Component {
    @Input()
    size!: Size;
}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h3 class="typography {{ size }}">
      <ng-content/>
    </h3>
  `,
})
export class H3Component {
    @Input()
    size!: Size;
}


@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h4 class="typography {{ size }}">
      <ng-content/>
    </h4>
  `,
})
export class H4Component {
    @Input()
    size!: Size;
}


@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h5 class="typography {{ size }}">
      <ng-content/>
    </h5>
  `,
})
export class H5Component {
    @Input()
    size!: Size;
}


@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
  <span class="typography {{ size }}">
    <ng-content/>
  </span>
  `,
})
export class SpanComponent {
    @Input()
    size!: Size;
}