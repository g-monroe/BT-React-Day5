import {default as sampleJson } from './sampleJson.superhero.json';
import { ISuperheroHandler } from './SuperheroHandler.js';
import { SuperheroItem } from '../types/superhero/superhero.js';

export default class fakeSuperheroHandler implements ISuperheroHandler{
    createHero(hero: SuperheroItem): Promise<SuperheroItem> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: number): Promise<SuperheroItem> {
        throw new Error("Method not implemented.");
    }
    updateById(id: number, hero: SuperheroItem): Promise<SuperheroItem> {
        throw new Error("Method not implemented.");
    }
    async getById(id: number): Promise<SuperheroItem>{
        return Promise.resolve(new SuperheroItem(sampleJson));
    }
}
