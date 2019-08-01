import { SuperheroItem } from './SuperheroItem';

  export default class SuperheroItems{
    superheros: SuperheroItem[];
    constructor( jsonData: any ){
        this.superheros = jsonData;
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