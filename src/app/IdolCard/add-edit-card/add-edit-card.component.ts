import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.css']
})
export class AddEditCardComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() card:any;
  IdolId:string;
  IdolName:string;
  IdolGroup:string;
  PhotoCardSet:string;
  DateAdded:string;
  PhotoFileName:string;
  PhotoFilePath:string;
  Group:string;

  GroupsList:any=[];

  ngOnInit(): void {
    this.loadGroupsList();
  }

  loadGroupsList(): void {
    this.service.getAllGroupNames().subscribe((data:any) => {
      this.GroupsList = data;

      this.IdolId = this.card.IdolId;
      this.IdolName = this.card.IdolName;
      this.IdolGroup = this.card.IdolGroup;
      this.PhotoCardSet = this.card.PhotoCardSet;
      this.DateAdded = this.card.DateAdded;
      this.PhotoFileName = this.card.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + "/" + this.PhotoFileName;
    })
  }

  addCard(): void {
    let today = new Date().toISOString().slice(0, 10);

    const cardData = {
      IdolName: this.IdolName,
      IdolGroup: this.Group,
      PhotoCardSet: this.PhotoCardSet,
      DateAdded: today,
      PhotoFileName: this.PhotoFileName
    };

    this.service.addIdolCard(cardData).subscribe(res => {
      alert(res.toString());
    });
  }

  updateCard(): void {

    const cardData = {
      IdolName: this.IdolName,
      IdolGroup: this.Group ? this.Group : this.IdolGroup,
      PhotoCardSet: this.PhotoCardSet,
      DateAdded: this.DateAdded,
      PhotoFileName: this.PhotoFileName,
      IdolId: this.IdolId
    };

    this.service.updateIdolCard(cardData).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event) {
    let file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data:any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + "/" + this.PhotoFileName;
    });
  }

}
