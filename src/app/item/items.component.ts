import { Component, OnInit } from "@angular/core";

import { Item } from "./item";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    
    items = new Array<Item>(
        { id: 1, name: "block1", zInd: 10000, color: "#FF0000" },
        { id: 2, name: "block2", zInd: 10000, color: "#00FF00" },
    );
    
    constructor() { }

    ngOnInit() {
        
    }

    pushBack(item: Item) {
      
      console.log("push back item ", item.id);
      console.log(" that had zIndex ", item.zInd);

      item.zInd = item.zInd - 1;

      this.showResume();

    }

  showResume() {

    console.log("This is the items resume");
    console.log("  Item 0 has zIndex ", this.items[0].zInd);
    console.log("  Item 1 has zIndex ", this.items[1].zInd);

  }

  getZIndex(item : Item) {

    return item.zInd;

  }

}