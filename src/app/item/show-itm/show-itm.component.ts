import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-itm',
  templateUrl: './show-itm.component.html',
  styleUrls: ['./show-itm.component.css']
})
export class ShowItmComponent implements OnInit {
      
  
  constructor(private service:SharedService) { }

  ItemList: any=[] ;
  ModalTitle!:string ;
  ActivateAddEditItmComp:boolean=false;
  itm:any;

  ItemNumberFilter:string="";
  ItemNameFilter:string="";
  ItemListWithoutFilter:any=[];
  

  ngOnInit(): void {
    this.refreshItmList();
  }
 

  addClick(){
    this.itm={
      ItemNumber:0,
      ItemName:"",
      ItemValue:""
    }
    this.ModalTitle="Add Item";
    this.ActivateAddEditItmComp=true;

  }

  editClick(item: any){
    this.itm=item;
      this.ModalTitle="Edit Item";
    this.ActivateAddEditItmComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteItem(this.itm.ItemNumber).subscribe(data=>{
        alert(data.toString());
        this.refreshItmList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditItmComp=false;
    this.refreshItmList();
  }

  refreshItmList(){
    this.service.getItmList().subscribe(data=>{
      this.ItemList=data;
      this.ItemListWithoutFilter=data;
    });
  }

  
  FilterFn(){
    var ItemNumberFilter=this.ItemNumberFilter;
    var ItemNameFilter=this.ItemNameFilter;
    this.ItemList=this.ItemListWithoutFilter.filter(function(el: { ItemNumber: { toString: () => string; }; ItemName: { toString: () => string; }; }){
      return el.ItemNumber.toString().toLowerCase().includes(
        ItemNumberFilter.toString().trim().toLowerCase()
      )&&
      el.ItemName.toString().toLowerCase().includes(
        ItemNameFilter.toString().trim().toLowerCase()
      )
    });
  }
  sortResult(prop: string | number,asc: any){
    this.ItemList=this.ItemListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
        return (a[prop]>b[prop])?1: ((a[prop]<b[prop])?-1:0);
      }
      else{
        return (b[prop]>a[prop])?1: ((b[prop]<a[prop])?-1:0);
      }
    })
  }
  }




function FilterFn() {
  throw new Error('Function not implemented.');
}

function sortResult(prop: any, asc: any) {
  throw new Error('Function not implemented.');
}

