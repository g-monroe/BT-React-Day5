import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render(){
        return(
            <Layout>
            <Header>
            <Link to='/superhero'>Add SuperHero</Link>
            <span>___</span>
                  <Link to='/superheroes'>SuperHero List</Link>
            </Header>
          </Layout>
        );

    }
}