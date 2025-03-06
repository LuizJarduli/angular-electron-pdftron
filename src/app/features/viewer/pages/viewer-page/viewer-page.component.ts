import { Component } from '@angular/core';
import { DocumentViewerComponent } from '../../components/document-viewer/document-viewer.component';
import { DocumentHeaderComponent } from '../../components/document-header/document-header.component';

@Component({
  selector: 'app-viewer-page',
  imports: [DocumentViewerComponent, DocumentHeaderComponent],
  templateUrl: './viewer-page.component.html',
  styleUrl: './viewer-page.component.scss',
})
export class ViewerPageComponent {
  public document: string =
    'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf';

  public title: string = 'Demo Document';

  public handleDocumentLoaded() {
    console.log('Document loaded');
  }
}
