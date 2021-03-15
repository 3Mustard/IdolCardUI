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

  ngOnInit(): void {
    this.refreshGroupList();
  }

  refreshGroupList(){
    this.service.getIdolGroupList().subscribe(data => {
      this.GroupList=data;
    })
  }
}
