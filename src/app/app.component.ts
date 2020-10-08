import { Component, OnInit } from '@angular/core';
import { ComicService } from './services/comic.service';
import { ComicInterface } from './models/comic_interface';
import { Observable } from 'rxjs';
import { MetadataInterface } from './models/metadata_interface';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  isLoading = false
  urlSafe = ''
  comicsAmount = 1000
  comic: ComicInterface


  constructor(private comicService: ComicService) {}

  ngOnInit() {
    this.loadNewComic()
  }

  loadMetadata(): Observable<MetadataInterface> {
    return this.comicService.getMetadata()
  }

  loadNewComic() {
    this.isLoading = true
    this.loadMetadata().pipe(
      mergeMap(metadata => {
        if(metadata.num && metadata.num > 0) {
          this.comicsAmount = metadata.num
          return this.comicService.getComic(this.comicsAmount)
        }
      })
    ).subscribe(comic => {
      this.comic = comic
      this.isLoading = false
    })
  }
}
