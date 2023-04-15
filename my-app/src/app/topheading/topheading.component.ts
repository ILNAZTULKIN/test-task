import { Component } from '@angular/core';
import { NewsapiserverService } from '../service/newsapiserver.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent {
  constructor(private _service: NewsapiserverService) {}
  totalLenght: any;
  page: number = 0;
  topheadingDisplay: any = [];
  selectedCountry: any;
  selectedCountry2: any;
  error: any;
  listcountry!: [];
  countrySelected!: string;
  listState!: any;

  ngOnInit(): void {
    this._service.topHeading().subscribe((result: any) => {
      this.topheadingDisplay = result.articles;
      this.totalLenght = result.lenght;
      this.selectedCountry = result.articles;
      this.selectedCountry2 = result.articles;
      (error: any) => {
        this.error = error.message;
        console.log(error);
      };
    });
  }
  onCountryandCategorySelected(countryName: any, categoryName: any) {
    if (!!countryName && !!categoryName) {
      this._service
        .getCategoryAndCountryNews(countryName, categoryName)
        .subscribe((result: any) => {
          this.listState = result;
          this.topheadingDisplay = result.articles;
          this.totalLenght = result.lenght;
        });
    } else if (!!countryName) {
      this._service.getCountryNews(countryName).subscribe((result: any) => {
        this.listState = result;
        this.topheadingDisplay = result.articles;
        this.totalLenght = result.lenght;
      });
    } else if (!!categoryName) {
      this._service.getCategoryNews(categoryName).subscribe((result: any) => {
        this.listState = result;
        this.topheadingDisplay = result.articles;
        this.totalLenght = result.lenght;
      });
    } else {
      alert('Вы не выбрали фильтр!');
    }
  }
}
