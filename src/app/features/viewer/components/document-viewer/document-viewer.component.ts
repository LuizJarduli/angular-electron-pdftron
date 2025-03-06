import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  InputSignal,
  NgZone,
  output,
  OutputEmitterRef,
  Signal,
  viewChild,
} from '@angular/core';
import { environment } from '../../../../../environments/environment';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';

@Component({
  selector: 'app-document-viewer',
  imports: [],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.scss',
})
export class DocumentViewerComponent implements AfterViewInit {
  public wvInstance?: WebViewerInstance;

  public viewerRef: Signal<ElementRef<HTMLDivElement>> =
    viewChild.required('viewer');

  public document: InputSignal<string | ''> = input('');

  public onDocumentLoaded: OutputEmitterRef<void> = output<void>();

  private readonly licenseKey = environment.licenseKey;

  constructor(private readonly ngZone: NgZone) {}

  public ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      WebViewer(
        {
          path: 'assets/webviewer/public',
          initialDoc: this.document(),
          licenseKey: this.licenseKey,
        },
        this.viewerRef().nativeElement
      ).then((instance) => {
        this.wvInstance = instance;
        const { documentViewer } = this.wvInstance.Core;

        instance.UI.setTheme('dark');

        documentViewer.addEventListener(
          'documentLoaded',
          () => {
            this.ngZone.run(() => {
              this.onDocumentLoaded.emit();
            });
          },
          { once: true }
        );
      });
    });
  }
}
