import React from 'react';
import { SuperheroHandler, ISuperheroHandler } from '../../utilities/SuperheroHandler';
import { SuperheroItem } from '../../types/superhero/SuperheroItem';
import  SuperheroForm  from './SuperheroForm';
import { Spin } from 'antd';
import ListHeros from './ListHeros';
interface ISuperheroProps{
    id: number;
    superHeroHandler?: ISuperheroHandler;
}
interface ISuperheroState{
    result?: SuperheroItem;
    results?: SuperheroItem[];
}
export default class SuperHero extends React.Component<ISuperheroProps, ISuperheroState>{
    
    static defaultProps = {
        id: 6161962,
        superHeroHandler: new SuperheroHandler()
    }
    state: ISuperheroState = {
        result: undefined,
        results: undefined,
    }
    componentDidMount = async () => {
        const {superHeroHandler, id} = this.props;
        if (id){
            const result = await superHeroHandler!.getById(id);
            this.setState({result});
        }else{
            const results = await this.getHeroes();
            this.setState({results});
        }
    }
    handleSave = async (entity: SuperheroItem): Promise<void> => {
        const updateEntity = entity.id
          ? await this.props.superHeroHandler!.updateById(entity.id, entity)
          : await this.props.superHeroHandler!.createHero(entity)
          this.setState({
            result: updateEntity
          })
      }
      deleteItem = async (id: number): Promise<void> => {
          await this.props.superHeroHandler!.deleteById(id)
      }
     getHeroes = async () => {
        const {superHeroHandler, id} = this.props;
        if (!id){
            const results = await superHeroHandler!.getAll();
            return results.superheros;
        }
        return [];
    }
    
    render(){
        if (!this.state.result && this.state.results){
            return (
                <>
                <ListHeros/>
                </>
            );
        }else if (this.state.result && !this.state.results){
            return(
                <SuperheroForm superHeroItem={this.state.result} handleSave={this.handleSave} deleteItem={this.deleteItem}/>
            );

        }
        return (
            <Spin/>
        );
    }
}