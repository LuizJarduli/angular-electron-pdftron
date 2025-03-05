import { Component } from '@angular/core';
import { DocumentViewerComponent } from '../../components/document-viewer/document-viewer.component';

@Component({
  selector: 'app-viewer-page',
  imports: [DocumentViewerComponent],
  templateUrl: './viewer-page.component.html',
  styleUrl: './viewer-page.component.scss',
})
export class ViewerPageComponent {}
