import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import { PageService } from '../../shared/services/page/page.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  gameListData: any;
  filter: any;
  p = 1;
  order = 'title';
  reverse = false;
  sortedCollection: any[];

  constructor(private apiService: ApiService, private pageService: PageService, private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.apiService.getGameList().subscribe((data: any) => {
      // console.log(data);
      this.gameListData = data;
      this.sortedCollection = this.orderPipe.transform(this.gameListData, this.order);
      setTimeout(() => {
        this.pageService.setBodyBGHeight('board-container', 'search-container');
      }, 0);
    });


  }

  setOrder(value: string) {
    this.reverse = !this.reverse;
    console.log(value);
    setTimeout(() => {
      this.pageService.setBodyBGHeight('board-container', 'search-container');
    }, 0);
  }


  checkQuery(filter) {
    // console.log(filter);
    setTimeout(() => {
      this.pageService.setBodyBGHeight('board-container', 'search-container');
    }, 0);
  }

}
