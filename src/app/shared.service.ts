import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000";
  readonly PhotoUrl="http://localhost:5000/Photos";

  constructor(private http:HttpClient) { }

  getIdolGroupList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/IdolGroup');
  }

  addIdolGroup(val:any){
    return this.http.post(this.APIUrl+'/IdolGroup',val);
  }

  updateIdolGroup(val:any){
    return this.http.put(this.APIUrl+'/IdolGroup',val);
  }

  deleteIdolGroup(val:any){
    return this.http.delete(this.APIUrl+'/IdolGroup',val);
  }

  getIdolCardList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/IdolCard');
  }

  addIdolCard(val:any){
    return this.http.post(this.APIUrl+'/IdolCard',val);
  }

  updateIdolCard(val:any){
    return this.http.put(this.APIUrl+'/IdolCard',val);
  }

  deleteIdolCard(val:any){
    return this.http.delete(this.APIUrl+'/IdolCard',val);
  }

  UploadPhoto(val:any)
  {
    return this.http.post(this.APIUrl+'/IdolCard/SaveFile',val);
  }

  getAllGroupNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/IdolCard/GetAllGroupNames');
  }
}
