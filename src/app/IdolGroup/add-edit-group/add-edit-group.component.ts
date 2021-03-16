import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.css']
})
export class AddEditGroupComponent implements OnInit {

  constructor() { }

  @Input() group:any;
  GroupId:string;
  GroupName:string;

  ngOnInit(): void {
    this.GroupId=this.group.GroupId;
    this.GroupName=this.group.GroupName;
  }

}
