import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  constructor(private service:SharedService) { }

  CardList:any=[];

  ModalTitle:string;
  ActivateAddEditCardComp: boolean = false;
  card:any;

  ngOnInit(): void {
    this.refreshCardList();
  }

  addClick(): void {
    this.card= {
      IdolId: 0,
      IdolName: "",
      IdolGroup: "",
      PhotoCardSet: "",
      DateAdded: "",
      PhotoFileName: "anon.png"
    }
    this.ModalTitle = "Add a New Card to the Collection";
    this.ActivateAddEditCardComp = true;
  }

  editClick(cardInfo): void {
    this.card = cardInfo;
    this.ModalTitle = "Edit Idol Card " + this.card.IdolName;
    this.ActivateAddEditCardComp = true;
  }

  deleteClick(cardId) {
    if(confirm('Confirm Delete')) {
      this.service.deleteIdolCard(cardId).subscribe(data => {
        alert(data.toString());
        this.refreshCardList();
      });
    }
  }

  closeClick(): void {
    this.ActivateAddEditCardComp = false;
    this.refreshCardList();
  }

  refreshCardList(): void {
    this.service.getIdolCardList().subscribe(data => {
      this.CardList = data;
    });
  }

}
