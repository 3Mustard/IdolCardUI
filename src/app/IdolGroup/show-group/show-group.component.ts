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
  ActivateAddEditGroupComp: boolean = false;
  group:any;

  ngOnInit(): void {
    this.refreshGroupList();
  }

  addClick(): void {
    this.group={
      GroupId:0,
      GroupName:""
    }
    this.ModalTitle="Add an Idol Group";
    this.ActivateAddEditGroupComp=true;
  }

  editClick(groupInfo): void {
    this.group=groupInfo;
    this.ModalTitle="Edit Idol Group " + this.group.GroupName;
    this.ActivateAddEditGroupComp=true;
  }

  closeClick(): void {
    this.ActivateAddEditGroupComp=false;
    this.refreshGroupList();
  }

  refreshGroupList():void{
    this.service.getIdolGroupList().subscribe(data => {
      this.GroupList=data;
    })
  }

}
