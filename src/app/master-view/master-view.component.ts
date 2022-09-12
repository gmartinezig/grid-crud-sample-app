import { Component, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
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
  
  public rowAdded(event: IRowDataEventArgs) {
    this.gridCrudSampleDataService.addCustomer(event.data).subscribe(result => {
      // Customer added;
    });
  }

  public rowEditDone(event: IGridEditDoneEventArgs) {
    this.gridCrudSampleDataService.updateCustomer(event.rowData).subscribe(result => {
      // Customer updated;
    });
  }

  public cellEditDone(event: IGridEditDoneEventArgs) {
    this.gridCrudSampleDataService.updateCustomer(event.rowData).subscribe(result => {
      // Customer updated;
    });
  }

  public rowDeleted(event: IRowDataEventArgs) {
    this.gridCrudSampleDataService.deleteCustomer(event.data.customerId).subscribe(result => {
        // Customer deleted;
    });
  }

}
