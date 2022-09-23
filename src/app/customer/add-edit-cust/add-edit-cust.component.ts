import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cust',
  templateUrl: './add-edit-cust.component.html',
  styleUrls: ['./add-edit-cust.component.css']
})
export class AddEditCustComponent implements OnInit {

  
  constructor(private service:SharedService) { }
  @Input() cust:any;
  CustomerId: string | undefined;
  CustomerName: string | undefined;
  CustomerPhone: string | undefined;
  Item:string | undefined;
  DateOfPurchase:string | undefined;
  PhotoFileName:string | undefined;
  PhotoFilePath:string |undefined;

  ItemList:any=[];
  
  ngOnInit(): void {
    this.loadItemList();
  }
  loadCustomerList() {
    throw new Error('Method not implemented.');
  }
  loadItemList(){
    this.service.getAllItemNames().subscribe((data:any)=>{
      this.ItemList=data;
      this.CustomerId=this.cust.CustomerId;
    this.CustomerName=this.cust.CustomerName;
    this.CustomerPhone=this.cust.CustomerPhone;
    this.Item=this.cust.Item;
    this.DateOfPurchase=this.cust.DateOPurchaseg;
    this.PhotoFileName=this.cust.PhotoFileName;
    this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

  addCustomer(){
    var val = {CustomerId:this.CustomerId,
                CustomerName:this.CustomerName,
              CustomerPhone:this.CustomerPhone,
             Item:this.Item,
             DateOfPurchase:this.DateOfPurchase,
              PhotoFileName:this.PhotoFileName
            };
    this.service.addCustomer(val).subscribe((res: { toString: () => any; })=>{
      alert(res.toString());
    });
  }

  updateCustomer(){
    var val = {this:this.CustomerId,any:this.CustomerId,
      CustomerName:this.CustomerName,CustomerPhone:this.CustomerPhone,
      Item:this.Item,
      DateOfPurchase:this.DateOfPurchase,PhotoFileName:this.PhotoFileName};
    this.service.updateCustomer(val).subscribe((res: { toString: () => any; })=>{
    alert(res.toString());
    });
  }
  uploadPhoto(event: { target: { files: any[]; }; }){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}

