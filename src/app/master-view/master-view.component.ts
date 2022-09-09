import { Component, OnInit } from '@angular/core';
import { GridCrudSampleDataService } from '../services/grid-crud-sample-data.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public gridCrudSampleDataCustomer: any = null;

  constructor(
    private gridCrudSampleDataService: GridCrudSampleDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.gridCrudSampleDataService.getCustomer().subscribe(data => this.gridCrudSampleDataCustomer = data);
  }
}
