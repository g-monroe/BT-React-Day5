import React from "react";
import { Button, Layout, Form, Input, Icon, Checkbox, Select, TreeSelect, List} from 'antd';
const SelectOption = Select.Option;
import {  withFormik } from 'formik';
import * as yup from 'yup';
import {AbilityItem} from './AbilityItem';
import 'antd/dist/antd.css';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';
import { universesList, abilitiesList } from '../../types/superhero/dropdownValues';

interface ISuperheroProps2 {
    id: number;
    name: string;
    identity?: string;
    ageOfOrigin?: number;
    firstAppearance: number;
    isAlien: boolean;
    originStory: string;
    url?: string;
    universe: number;
    abilities: number[];
  }
  
  interface ISuperheroState2 {
    id: number;
    name: string;
    secretIdentity?: string;
    age?: number;
    firstAppearance: number;
    isAlien: boolean;
    originStory: string;
    wikiUrl?: string;
    universe: number;
    abilities: number[];
  }
export class HeroForm extends React.Component<ISuperheroProps2, ISuperheroState2>{
    static defaultProps = {
        id: 0
      };

    
}