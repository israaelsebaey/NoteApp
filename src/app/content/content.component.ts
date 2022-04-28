import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  list:any[]=[
    {id:0,name:''}
  ];
  text="there is no items";
  msg="full";
  rowStyle='';
  inputVale:string=''
  constructor() { }
  ngOnInit(): void {
    this.rowStyle="default"; 
  }
  Add(val:string){
    this.list.push({id:this.list.length,name:val})
    console.log(val);
    console.log(this.list)
    this.rowStyle="change"
    this.inputVale='';
  }
  Delete(id:number){
    alert("are you sure?")
    this.list=this.list.filter(item=>item.id!==id)
 
    console.log(id)
   
  }


}
