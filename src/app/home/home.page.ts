import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  indeterminateState: boolean;
  checkParent: boolean;
  Checkboxes: any;
  selectedArray: any = [];
  constructor() {
    this.Checkboxes = [
      {
        _id: 1,
        value: "Captain Marvel",
        isItemChecked: false
      },
      {
        _id: 2,
        value: "Thor",
        isItemChecked: false
      },
      {
        _id: 3,
        value: "Iron Man",
        isItemChecked: false
      },
      {
        _id: 4,
        value: "Spider Man",
        isItemChecked: false
      },
      {
        _id: 5,
        value: "Loki",
        isItemChecked: false
      }
    ];
  }
  checkCheckbox(ev: any) {
    setTimeout(() => {
      this.Checkboxes.forEach(item => {
        item.isItemChecked = this.checkParent;
        console.log('item.isItemChecked :', item.isItemChecked);
      });
    });
  }
  verifyEvent(ev: any, check: any) {
    if (check.isItemChecked) {
      this.selectedArray.push(check);
    }
    else {
      this.selectedArray.splice(this.selectedArray.indexOf(check), 1);
    }
    console.log('this.selectedArray :', this.selectedArray);
    const allItems = this.Checkboxes.length;
    let selected = 0;
    this.Checkboxes.map(item => {
      if (item.isItemChecked) selected++;
    });
    if (selected > 0 && selected < allItems) {
      /* One item is selected among all checkbox elements */
      this.indeterminateState = true;
      this.checkParent = false;
    } else if (selected == allItems) {
      /* All item selected */
      this.checkParent = true;
      this.indeterminateState = false;
    } else {
      /* No item is selected */
      this.indeterminateState = false;
      this.checkParent = false;
    }
  }

}
