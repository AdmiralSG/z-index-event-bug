"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.items = new Array({ id: 1, name: "block1", zInd: 10000, color: "#FF0000" }, { id: 2, name: "block2", zInd: 10000, color: "#00FF00" });
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.pushBack = function (item) {
        console.log("push back item ", item.id);
        console.log(" that had zIndex ", item.zInd);
        item.zInd = item.zInd - 1;
        this.showResume();
    };
    ItemsComponent.prototype.showResume = function () {
        console.log("This is the items resume");
        console.log("  Item 0 has zIndex ", this.items[0].zInd);
        console.log("  Item 1 has zIndex ", this.items[1].zInd);
    };
    ItemsComponent.prototype.getZIndex = function (item) {
        return item.zInd;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBU2xEO0lBT0k7UUFMQSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ2IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQ3hELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUMzRCxDQUFDO0lBRWMsQ0FBQztJQUVqQixpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFVO1FBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFSCxtQ0FBVSxHQUFWO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUQsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxJQUFXO1FBRW5CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUVuQixDQUFDO0lBcENVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7O09BQ1csY0FBYyxDQXNDMUI7SUFBRCxxQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6IFwiYmxvY2sxXCIsIHpJbmQ6IDEwMDAwLCBjb2xvcjogXCIjRkYwMDAwXCIgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJibG9jazJcIiwgekluZDogMTAwMDAsIGNvbG9yOiBcIiMwMEZGMDBcIiB9LFxuICAgICk7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdXNoQmFjayhpdGVtOiBJdGVtKSB7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwicHVzaCBiYWNrIGl0ZW0gXCIsIGl0ZW0uaWQpO1xuICAgICAgY29uc29sZS5sb2coXCIgdGhhdCBoYWQgekluZGV4IFwiLCBpdGVtLnpJbmQpO1xuXG4gICAgICBpdGVtLnpJbmQgPSBpdGVtLnpJbmQgLSAxO1xuXG4gICAgICB0aGlzLnNob3dSZXN1bWUoKTtcblxuICAgIH1cblxuICBzaG93UmVzdW1lKCkge1xuXG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBpdGVtcyByZXN1bWVcIik7XG4gICAgY29uc29sZS5sb2coXCIgIEl0ZW0gMCBoYXMgekluZGV4IFwiLCB0aGlzLml0ZW1zWzBdLnpJbmQpO1xuICAgIGNvbnNvbGUubG9nKFwiICBJdGVtIDEgaGFzIHpJbmRleCBcIiwgdGhpcy5pdGVtc1sxXS56SW5kKTtcblxuICB9XG5cbiAgZ2V0WkluZGV4KGl0ZW0gOiBJdGVtKSB7XG5cbiAgICByZXR1cm4gaXRlbS56SW5kO1xuXG4gIH1cblxufSJdfQ==