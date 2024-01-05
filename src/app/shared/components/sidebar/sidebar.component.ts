import { Component, ElementRef, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { GifsModule } from '../../../gifs/gifs.module';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public tagInput!: ElementRef<HTMLButtonElement>;
  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
