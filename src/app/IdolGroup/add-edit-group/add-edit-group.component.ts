import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.css']
})
export class AddEditGroupComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() group:any;
  GroupId:string;
  GroupName:string;

  ngOnInit(): void {
    this.GroupId = this.group.GroupId;
    this.GroupName = this.group.GroupName;
  }

  addGroup():void {
    const groupData = {
      GroupName: this.GroupName
    };

    this.service.addIdolGroup(groupData).subscribe(res => {
      alert(res.toString());
    });
  }

  updateGroup(){
    const groupData = {
      GroupId: this.GroupId,
      GroupName: this.GroupName
    };

    this.service.updateIdolGroup(groupData).subscribe(res => {
      alert(res.toString());
    });
  }

}
