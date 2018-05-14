import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../shared/services/common/pagination.service';

@Component({
  selector: 'app-games-list-pagination',
  templateUrl: './games-list-pagination.component.html',
  styleUrls: ['./games-list-pagination.component.scss']
})
export class GamesListPaginationComponent implements OnInit {

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
  }

  pageChanged($event){
    console.log($event);
    this.paginationService.pagination = $event; 
  }

}
