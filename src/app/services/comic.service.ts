import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComicInterface } from '../models/comic_interface';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  base = 'https://xkcd.com/'

  constructor(private http: HttpClient) { }

  getComic(max: number, headers = this.getDefaultHeaders()): Observable<ComicInterface> {
    const comicNumber = this.generateRandom(max)
    return this.http.get(this.base + comicNumber + '/', {headers}) as Observable<ComicInterface>
  }

  private getDefaultHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
    return headers;
  }

  generateRandom(max: number): number {
    return Math.floor(Math.random() * max)
  }
} 
