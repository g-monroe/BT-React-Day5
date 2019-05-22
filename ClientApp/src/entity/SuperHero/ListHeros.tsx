import React from 'react';
import { SuperheroHandler, ISuperheroHandler } from '../../utilities/SuperheroHandler';
import { SuperheroItem } from '../../types/superhero/SuperheroItem';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
interface ISuperheroProps{
    id: number;
    superHeroHandler?: ISuperheroHandler;
}
interface ISuperheroState{
    result?: SuperheroItem;
    results?: SuperheroItem[];
}
export default class ListHeros extends React.Component<ISuperheroProps, ISuperheroState>{
    
    static defaultProps = {
        id: undefined,
        superHeroHandler: new SuperheroHandler()
    }
    state: ISuperheroState = {
        results: undefined,
    }
    componentDidMount = async () => {
            const results = await this.getHeroes();
            this.setState({results});
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
                {this.state.results.map(h => <><span>{h.heroName}</span><Link key={h.id} to={{pathname: `/superhero/${h.id}`,state: {id: h.id, type: "put"}}}>(Click Here)</Link></>)}
                </>
            );
        }else if (this.state.result && !this.state.results){
            return (
                <Spin/>
            );

        }
        return (
            <Spin/>
        );
    }
}