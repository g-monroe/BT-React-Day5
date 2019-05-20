import React from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
interface IAbilityItemProps{
    identier: number;
    name: string;
}
export class AbilityItem extends React.Component<IAbilityItemProps>{

    render() {
        return(
            <List.Item>
                <List.Item.Meta
                    title={this.props.name}
                    description={this.props.name}
                    
                />
            </List.Item>
        );
    }
}