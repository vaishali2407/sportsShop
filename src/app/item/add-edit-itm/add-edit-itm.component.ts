import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-itm',
  templateUrl: './add-edit-itm.component.html',
  styleUrls: ['./add-edit-itm.component.css']
})
export class AddEditItmComponent implements OnInit {
  
  constructor(private service:SharedService) { }
  @Input() item:any;
  ItemNumber!: string;
  ItemName!: string ;
  ItemValue!: string ;
  
  ngOnInit(): void {
    this.ItemNumber=this.item.ItemNumber;
    this.ItemName=this.item.ItemName;
    this.ItemValue=this.item.ItemValue;
  }

  addItem(){
    var val = {ItemNumber:this.ItemNumber,
                ItemName:this.ItemName,
              ItemValue:this.ItemValue};
    this.service.addItem(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateItem(){
    var val = {ItemNumber:this.ItemNumber,
        ItemName:this.ItemName,
        ItemValue:this.ItemValue};
    this.service.updateItem(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
