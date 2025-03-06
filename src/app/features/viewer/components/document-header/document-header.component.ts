import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-document-header',
  imports: [],
  templateUrl: './document-header.component.html',
  styleUrl: './document-header.component.scss',
})
export class DocumentHeaderComponent {
  public title: InputSignal<string> = input<string>('');
}
