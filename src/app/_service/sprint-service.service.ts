import { Injectable } from '@angular/core';
import { SprintData } from '../_model/sprint-data';
import { UserStory } from '../_model/user-story';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { TokenGenerator } from 'uuid-token-generator';

@Injectable({
  providedIn: 'root'
})
export class SprintServiceService {

  private httpClient:HttpClient;
  private url:string= "http://localhost:81/sprints/";

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
  }

  public callSprintDataResource(sprintId: string):Observable<SprintData>{
    return this.httpClient.get<SprintData>(this.url + sprintId);
  }
  public getSprintData(sprintId: string){
    return this.callSprintDataResource(sprintId);
  }

  public getAllSprintData():Observable<SprintData[]>{
    return this.httpClient.get<SprintData[]>(this.url).pipe(
      map(data=>{ return data}),
      tap(data=>console.log(data))
    );
  }

  public addUserStory(userStory:UserStory,sprintId: string){
    // this.callSprintDataResource().subscribe(
    //   spritData => .userStories.push(userStory);
    // );
    //TODO, rifare il metodo per gli sprint
    return new Observable<string>(observer=>{
     // userStory.id = this.uuid();
      this.httpClient.post<UserStory>(this.url + sprintId,userStory).subscribe(
        insertResult=>{observer.next("ok");observer.complete();},
        error => {observer.next("ko (" + error + " )");observer.complete();}
      );
    }); 
  }

  public removeUserStory(userStory:UserStory){
    // let index = this.sprintData.userStories.indexOf(userStory);
    // this.sprintData.userStories.splice(index,1);
    // TODO CHIAMARE API in DELETE 
  }

  //Metodo che recupera le userStories per nome 
  public getStoriesByParams(parametri: HttpParams):Observable<UserStory[]>{
    return this.httpClient.get<UserStory[]>(this.url,{params:parametri});
  }

  public uuid():string{
     // Default is a 128-bit token encoded in base58
    const tokgen = new TokenGenerator();
    return tokgen.generate();
  }
}
