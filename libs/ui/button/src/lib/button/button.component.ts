import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TypographyComponent } from '@alfabit-zuka/typography';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Theme = 'blue' | 'violet';

@Component({
  selector: 'ab-button',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /**
   * Variante do botão.
   */
  @Input() variant: Variant = 'primary';
  /**
   * Define se o botão está desabilitado.
   */
  @Input() disabled = false;
  @Input() theme: Theme = 'blue';

  getClasses(): string {
    return `${this.variant} ${this.theme}`;
  }
}
