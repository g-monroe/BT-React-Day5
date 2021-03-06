import React from "react";
import { Button, Layout, Form, Input, Icon, Checkbox, Select, Typography } from 'antd';
const SelectOption = Select.Option;
const { Header, Content, Footer } = Layout;
const { Text } = Typography;
import {  withFormik, InjectedFormikProps } from 'formik';
import * as yup from 'yup';
import 'antd/dist/antd.css';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';
import { universesList, abilitiesList } from '../../types/superhero/dropdownValues';
import { __values } from 'tslib';
import { SuperheroItem } from '../../types/superhero/SuperheroItem';

interface ISuperheroFormProps {
    deleteItem: (id: number) => Promise<void>; 
    handleSave: (entity: SuperheroItem) => Promise<void>;
    superHeroItem: SuperheroItem;
}

interface ISuperheroFormState {
  id?: number;
  heroName: string;
  secretIdentity?: string;
  age?: number;
  firstAppearance: number;
  isAlien: boolean;
  originStory: string;
  wikiUrl?: string;
  universe: number;
  abilities: number[];
}
const heroSchema = yup.object().shape<ISuperheroFormState>({
  heroName: yup.string().required().label("Hero Name"),
  secretIdentity: yup.string().label("Secret Identity"),
  age: yup.number().min(0).max(9000).label("Age"),
  firstAppearance: yup.number().required().min(1900).max(new Date().getFullYear() + 1).label("First Appearance"),
  isAlien: yup.boolean().label("Is Alien"),
  originStory: yup.string().required().max(5000).label("Origin Story"),
  wikiUrl: yup.string().url().label("Wiki Url"),
  universe: yup.number().required().label("Universe"),
  abilities: yup.array<number>().label("Abilities")
});
class SuperheroForm extends React.Component<InjectedFormikProps<ISuperheroFormProps, ISuperheroFormState>> {
  
  handleSelectChange = (fieldName:string, values: any) =>{
    this.props.setFieldValue(fieldName, values);
  }
  getValidStatus = (error:any) => {
    return !!error ? 'error' : 'success';
  }

  render() {
    const {values, errors, handleChange, isSubmitting} = this.props;
    return (
      <div>
        <Layout>
        <Header>
        <Text mark></Text>
        </Header>
        <Layout>
          <Content>
            
            <Form onSubmitCapture={this.props.handleSubmit}>
              <FormItem validateStatus={this.getValidStatus(errors.heroName)} help={errors.heroName} label="Name" required >
                <Input onChange={handleChange} value={values.heroName} name="heroName" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Superhero Name"/>
              </FormItem>
              <FormItem validateStatus={this.getValidStatus(errors.universe)} label="universe" help={errors.universe} required>
                <Select id="universe" onChange={values=>this.handleSelectChange("universe", values)} value={values.universe} >
                  {universesList.map(u => <SelectOption key={u.id} value={u.id}>{u.name}</SelectOption>)}
                </Select>
              </FormItem>
              <FormItem validateStatus={this.getValidStatus(errors.age)} label="Age" help={errors.age} required>
                <Input onChange={handleChange} id="age" value={values.age} type="number" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Age Of Origin"/>
              </FormItem>
              <FormItem validateStatus={this.getValidStatus(errors.secretIdentity)} label="Identity" help={errors.secretIdentity}>
                <Input onChange={handleChange}  name="secretIdentity" value={values.secretIdentity} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Secret Identity"/>
              </FormItem>
              <FormItem validateStatus={this.getValidStatus(errors.wikiUrl)} label="WikiUrl" help={errors.wikiUrl}>
                <Input onChange={handleChange}  name="wikiUrl" value={values.wikiUrl} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="WikiUrl"/>
              </FormItem>
              <FormItem validateStatus={this.getValidStatus(errors.firstAppearance)} label="Apperance" help={errors.firstAppearance} required>
                <Input onChange={handleChange}  name="firstAppearance" value={values.firstAppearance} type="number" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="1909"/>
              </FormItem>
              <FormItem validateStatus={this.getValidStatus(errors.isAlien)} label="isAlien" help={errors.isAlien} required>
                <Checkbox onChange={handleChange}  name="isAlien" checked={values.isAlien} >Is Alien</Checkbox>
              </FormItem>
              <FormItem validateStatus={this.getValidStatus(errors.originStory)} label="Story" help={errors.originStory}  required>
                <TextArea onChange={handleChange}  name="originStory" value={values.originStory} placeholder="This is the story."/>
              </FormItem>
              <FormItem validateStatus={this.getValidStatus(errors.abilities)} label="Abilities" help={errors.abilities} required>
                <Select id="abilities" onChange={values=>this.handleSelectChange("abilities", values)} value={values.abilities} mode="multiple">
                    {abilitiesList.map(u => <SelectOption key={u.id} value={u.id}>{u.name}</SelectOption>)}
                </Select>
               
              </FormItem>
              <FormItem>
              <Button loading={isSubmitting} onClick={this.props.handleSubmit} type="primary">
                    Submit
                  </Button>
                  <Button loading={isSubmitting} onClick={() => this.props.deleteItem(this.props.superHeroItem.id!)} type="primary">
                    Delete
                  </Button>
              </FormItem>
            </Form>
            <hr/>
            <div>
              {JSON.stringify(values)}
            </div>
          </Content>
        </Layout>
        <Footer>Bottom of Page!</Footer>
      </Layout>
        
      </div>
    );
  }
}
const myComponent =  withFormik<ISuperheroFormProps, ISuperheroFormState>({
  
  mapPropsToValues: props => ({
    id: props.superHeroItem.id,
    heroName: props.superHeroItem.heroName,
    secretIdentity: props.superHeroItem.identity,
    age: props.superHeroItem.ageOfOrigin,
    firstAppearance: props.superHeroItem.firstAppearance,
    isAlien: props.superHeroItem.isAlien,
    originStory: props.superHeroItem.originStory,
    wikiUrl: props.superHeroItem.url,
    universe: props.superHeroItem.universe,
    abilities: props.superHeroItem.abilities
  }),
  validationSchema: heroSchema,
  handleSubmit: async (values, { setSubmitting, props }) =>  {
      console.log("your values:", values);
      await props.handleSave(new SuperheroItem(values));
      setSubmitting(false);
  }
  
});
export default myComponent(SuperheroForm);