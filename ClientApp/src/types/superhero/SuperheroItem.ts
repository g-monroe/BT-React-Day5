
  export class SuperheroItem{
    id?: number;
    heroName: string;
    identity?: string;
    ageOfOrigin?: number;
    firstAppearance: number;
    isAlien: boolean;
    originStory: string;
    url?: string;
    universe: number;
    abilities: number[];
    constructor( jsonData: any ){
        this.id = jsonData.id;
        this.heroName = jsonData.heroName;
        this.abilities = jsonData.abilities;
        this.identity = jsonData.identity;
        this.firstAppearance = jsonData.firstAppearance;
        this.isAlien = jsonData.isAlien;
        this.url = jsonData.url;
        this.universe = jsonData.universe;
        this.ageOfOrigin = jsonData.ageOfOrigin;
        this.originStory = jsonData.originStory;
    }
    // private deserialize(instanceData: SuperheroItem) {
    //     // Note this.active will not be listed in keys since it's declared, but not defined
    //     const keys = Object.keys(this);
    //     for (const key of keys) {
    //       if (instanceData.hasOwnProperty(key)) {
    //         this[key] = instanceData[key];
    //       }
    //     }
    //   }
  }