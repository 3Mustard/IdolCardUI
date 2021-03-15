import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.css']
})
export class ShowGroupComponent implements OnInit {

  constructor(private service:SharedService) { }

  GroupList:any=[];

  ModalTitle:string;
  ActivateAddEditGroupComp:boolean=false;
  group:any;

  ngOnInit(): void {
    this.refreshGroupList();
  }

  addClick(){
    this.group={
      IdolGroupId:0,
      IdolGroupName:""
    }
    this.ModalTitle="Add an Idol Group";
    this.ActivateAddEditGroupComp=true;
  }

  closeClick(){
    this.ActivateAddEditGroupComp=false;
    this.refreshGroupList();
  }

  refreshGroupList(){
    this.service.getIdolGroupList().subscribe(data => {
      this.GroupList=data;
    })
  }
}
