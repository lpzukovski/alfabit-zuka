import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent} from '@alfabit-zuka/typography';

@Component({
  selector: 'ab-modal',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewChecked{

  @Input()
  isOpen = false;

  @Input()
  modalTitle = '';

  @Output()
  closed = new EventEmitter();

  @ViewChild('modal')
  modal!: ElementRef<HTMLDialogElement>;

  ngAfterViewChecked(): void {
    if(this.isOpen){
      this.modal.nativeElement.showModal();
    }else {
      this.modal.nativeElement.close();
    }
  }

  closeModal(){
    if(this.isOpen){
      this.closed.emit();
    }
  }
}
