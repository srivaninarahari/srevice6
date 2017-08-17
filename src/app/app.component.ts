import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  arrayList: any[] = [];

  constructor(private _listService: ListService) { }

  ngOnInit() { }


  submit(Name: string, LastName: string) {
    let model = {
      name: Name,
      lastName: LastName
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}
