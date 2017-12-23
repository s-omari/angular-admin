import { Component, OnInit , Input , Output , EventEmitter , ChangeDetectorRef , ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit {

  constructor(
    private cdRef:ChangeDetectorRef
  ) { } 
  ngOnInit() {
    this.cdRef.detectChanges();
  }

@Input()  data;
@Input()  table;
@Output()  onSelect = new EventEmitter();

  SelectItem(item) {
    this.onSelect.emit(item);
  }

}
