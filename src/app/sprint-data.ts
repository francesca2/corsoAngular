import { UserStory } from './user-story';

export class SprintData {
    public id:number;
    public title:string;
    public goal: boolean;
    public goalLevel: number;
    public userStories: UserStory[];

    constructor(){
        this.userStories = [
            new UserStory('titolo1','description1','pippo'),
            new UserStory('titolo2','description2','pluto'),
            new UserStory('titolo3','description3','paperino')
        ]

        this.id=1;
        this.title= 'Sprint 1';
        this.goal=false;
        this.goalLevel=0;

    }
}
