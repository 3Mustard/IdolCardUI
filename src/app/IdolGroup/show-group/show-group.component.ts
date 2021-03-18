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

  GroupIdFilter: string = "";
  GroupNameFilter: string = "";
  GroupListNoFilter: any = [];

  ngOnInit(): void {
    this.refreshGroupList();
  }

  addClick(): void {
    this.group= {
      GroupId: 0,
      GroupName: ""
    }
    this.ModalTitle = "Add an Idol Group";
    this.ActivateAddEditGroupComp = true;
  }

  editClick(groupInfo): void {
    this.group = groupInfo;
    this.ModalTitle = "Edit Idol Group " + this.group.GroupName;
    this.ActivateAddEditGroupComp = true;
  }

  deleteClick(groupId) {
    if(confirm('Confirm Delete')) {
      this.service.deleteIdolGroup(groupId).subscribe(data => {
        alert(data.toString());
        this.refreshGroupList();
      });
    }
  }

  closeClick(): void {
    this.ActivateAddEditGroupComp = false;
    this.refreshGroupList();
  }

  refreshGroupList(): void {
    this.service.getIdolGroupList().subscribe(data => {
      this.GroupList = data;
      this.GroupListNoFilter = data;
    });
  }

  filterGroups(){
    let GroupIdFilter = this.GroupIdFilter;
    let GroupNameFilter = this.GroupNameFilter;

    this.GroupList = this.GroupListNoFilter.filter(group => {
      return group.GroupId.toString().toLowerCase().includes(
        GroupIdFilter.toString().trim().toLowerCase()
      )&&
      group.GroupName.toString().toLowerCase().includes(
        GroupNameFilter.toString().trim().toLowerCase()
      )
    });
  }
}
