import React from 'react';
import { SuperheroHandler, ISuperheroHandler } from '../../utilities/SuperheroHandler';
import { SuperheroItem } from '../../types/superhero/superhero';
import  SuperheroForm  from './SuperheroForm';
import { Spin } from 'antd';
interface ISuperheroProps{
    id: number;
    superHeroHandler?: ISuperheroHandler;
}
interface ISuperheroState{
    result?: SuperheroItem;
}
export default class SuperHero extends React.Component<ISuperheroProps, ISuperheroState>{
    static defaultProps = {
        id: 60,
        superHeroHandler: new SuperheroHandler()
    }
    state: ISuperheroState = {
        result: undefined,
    }
    componentDidMount = async () => {
        const {superHeroHandler, id} = this.props;
        if (id){
            const result = await superHeroHandler!.getById(id);
            this.setState({result});
        }
    }
    render(){
        if (!this.state.result){
            return (
                <div>
                <Spin />
                </div>
            );
        }
        return(
            <SuperheroForm superHeroItem={this.state.result}/>
        );
    }
}