import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import { PageService } from '../../shared/services/page/page.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  gameListData: any;
  p = 1;

  constructor(private apiService: ApiService, private pageService: PageService) { }

  ngOnInit() {
    this.apiService.getGameList().subscribe((data: any) => {
      // console.log(data);
      this.gameListData = data;
      setTimeout(() => {
        this.pageService.setBodyBGHeight('board-container', 'search-container');
      }, 0);
    });
  }


  checkQuery(filter) {
    // console.log(filter);
    setTimeout(() => {
      this.pageService.setBodyBGHeight('board-container', 'search-container');
    }, 0);
  }

}
