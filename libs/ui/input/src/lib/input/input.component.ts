import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ab-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {

  /**
   * Define se o Input é multilinha.
   */
  @Input() multiline = false;
  @Input() label = '';
  /**
   * Forneça um id único para cada input.
   */
  @Input() id = '';
  @Input() disabled = false;

  getContainerClasses(): string {
    let classes = 'input-container';

    if (this.label) {
      classes += ' with-label';
    }

    return classes;
  }
}
