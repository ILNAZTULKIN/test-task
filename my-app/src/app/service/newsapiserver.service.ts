import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsapiserverService {
  errorMessage: String = 'Не правильная ссылка!';
  constructor(private _http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'X-Api-Key': '1f9a497208c741d396285623165c1635',
    }),
  };
  newApiUrl = ' https://newsapi.org/v2/top-headlines?country=us';

  techApiUrl =
    ' https://newsapi.org/v2/everything?q=bitcoin&apiKey=1f9a497208c741d396285623165c1635';

  topHeading(): Observable<any> {
    return this._http
      .get(this.newApiUrl, { headers: this.httpOptions.headers })
      .pipe(
        catchError((err) => {
          console.log(this._http);
          console.log(this.errorMessage);
          console.log(err);
          this.errorMessage = err.message;
          return [];
        })
      );
  }

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl).pipe(
      catchError((err) => {
        console.log(this.errorMessage);
        console.log(err);
        this.errorMessage = err.message;
        return [];
      })
    );
  }

  getCountryNews(countryName: string): Observable<any> {
    return this._http.get(
      `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=1f9a497208c741d396285623165c1635`
    );
  }

  getCategoryNews(categoryName: string): Observable<any> {
    return this._http.get(
      `https://newsapi.org/v2/top-headlines?category=${categoryName}&apiKey=1f9a497208c741d396285623165c1635`
    );
  }
  getCategoryAndCountryNews(countryName: string, categoryName: string) {
    return this._http.get(
      `https://newsapi.org/v2/top-headlines?country=${countryName}&category=${categoryName}&apiKey=1f9a497208c741d396285623165c1635`
    );
  }
  getSearchNews(searchName: string) {
    return this._http.get(
      `https://newsapi.org/v2/everything?q=${searchName}&apiKey=1f9a497208c741d396285623165c1635`
    );
  }
}
