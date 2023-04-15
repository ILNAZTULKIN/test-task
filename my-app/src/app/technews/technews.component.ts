import { Component } from '@angular/core';
import { NewsapiserverService } from '../service/newsapiserver.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css'],
})
export class TechnewsComponent {
  constructor(private _services: NewsapiserverService) {}
  technewDisplay: any = [];
  totalLenght: any;
  page: number = 0;
  error: any = [];

  ngOnInit(): void {
    this._services.techNews().subscribe((result) => {
      this.technewDisplay = result.articles;
      this.totalLenght = 100;
      console.log(this.totalLenght);
    });
  }
  getSearchNews(searchName: string) {
    return this._services.getSearchNews(searchName).subscribe((result: any) => {
      this.technewDisplay = result.articles;
      if (result.totalResults > 100) {
        this.totalLenght = 100;
        alert(
          `Пришло новостей ${result.totalResults}, будет обработано только первые 100 новостей`
        );
      } else if (!result.totalResults) {
        alert('Новостей нету по вашему запросу');
      } else {
        this.totalLenght = result.totalResults;
      }
    });
  }
}
