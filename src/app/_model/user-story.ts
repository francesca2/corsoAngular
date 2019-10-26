export class UserStory {
    public title:string;
    public description:string;
    public acceptanceCriteria:string;
    public status:number;
    public owner:string;
    public creator:string;
    public effort:number;

    constructor(title:string,description:string,creator:string){
        this.title = title;
        this.description = description;
        this.creator = creator;
    }
}

