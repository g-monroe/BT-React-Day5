import { APIHandler } from './apiHandler';
import { SuperheroItem } from '../types/superhero/superhero';

export interface ISuperheroHandler{
    getById(id: number): Promise<SuperheroItem>;
    createHero(hero: SuperheroItem): Promise<SuperheroItem>;
    deleteById(id: number): Promise<SuperheroItem>;
    updateById(id: number, hero: SuperheroItem): Promise<SuperheroItem>;
}

export class SuperheroHandler implements ISuperheroHandler{
    //Get Element by ID and then respond with the Item.
    async getById(id: number): Promise<SuperheroItem>{
        return await APIHandler(`/api/superhero/${id}`, {
            method: "GET",
            responseType: SuperheroItem
        });
    }
    //Create Element by ID and then respond with the Item.
    async createHero(hero: SuperheroItem): Promise<SuperheroItem>{
        return await APIHandler(`/api/superhero/`, {
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
