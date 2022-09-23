import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css']
})
export class ShowCustComponent implements OnInit {
  CustListWithoutFilter: any[] | undefined;

  constructor(private service:SharedService) { }

  CustList:any=[] ;
  ModalTitle:string | undefined;
  ActivateAddEditcustComp:boolean=false;
  cust:any;

 

  ngOnInit(): void {
    this.refreshCustList();
  }
 
  addClick(){
    this.cust={
      CustomerId:0,
    CustomerName:"",
      CustomerPhone:"",
      Item:"",
      DateOfPurchase:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditcustComp=true;

  }

  editClick(item: any){
    this.cust=item;
      this.ModalTitle="Edit Customer";
    this.ActivateAddEditcustComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteCustomer(this.cust.CustomerId).subscribe(data=>{
        alert(data.toString());
        this.refreshCustList();
      })
    }
  }

    closeClick(){
    this.ActivateAddEditcustComp=false;
    this.refreshCustList();
  }

  refreshCustList(){
    this.service.getCustList().subscribe(data=>{
      this.CustList=data;
      this.CustListWithoutFilter=data;
      
    });
  }
 

}




function closeClick() {
  throw new Error('Function not implemented.');
}

