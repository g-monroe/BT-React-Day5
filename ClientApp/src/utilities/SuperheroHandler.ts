import { APIHandler } from './apiHandler';
import { SuperheroItem } from '../types/superhero/SuperheroItem';
import SuperheroItems  from '../types/superhero/SuperheroItems';
export interface ISuperheroHandler{
    getAll(): Promise<SuperheroItems>;
    getById(id: number): Promise<SuperheroItem>;
    createHero(hero: SuperheroItem): Promise<SuperheroItem>;
    deleteById(id: number): Promise<SuperheroItem>;
    updateById(id: number, hero: SuperheroItem): Promise<SuperheroItem>;
}
export class SuperheroCollectionResponse{
    collection: SuperheroItem[]
    constructor(data: any[]){
        this.collection = data.map(d => new SuperheroItem(d));
    }
}
export class SuperheroHandler implements ISuperheroHandler{
    //Get Element by ID and then respond with the Item.
    async getById(id: number): Promise<SuperheroItem>{
        return await APIHandler(`/api/superhero/${id}`, {
            method: "GET",
            responseType: SuperheroItem
        });
    }
    async getAll(): Promise<SuperheroItems>{
        return await APIHandler(`/api/superhero`, {
            method: "GET",
            responseType: SuperheroItems
        });
    }
    //Create Element by ID and then respond with the Item.
    async createHero(hero: SuperheroItem): Promise<SuperheroItem>{
        return await APIHandler(`/api/superhero`, {
            method: "POST",
            data: hero,
            responseType: SuperheroItem
        });
    }
    //Delete Element by ID and then respond with the Item.
    async deleteById(id: number): Promise<SuperheroItem>{
        return await APIHandler(`/api/superhero/${id}`, {
            method: "DELETE",
            responseType: SuperheroItem
        });
    }
    //Update Element by ID and then respond with the Item.
    async updateById(id: number, hero: SuperheroItem): Promise<SuperheroItem>{
        return await APIHandler(`/api/superhero/${id}`, {
            method: "PUT",
            data: hero,
            responseType: SuperheroItem
        });
    }
}

