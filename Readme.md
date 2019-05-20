# Superhero Project

## Goals
### Implement a superhero detail API handler class 

Run the root branch and access the APIs endpoints at {branch}/api/superhero/{id} for each http type (get, put, post, delete) 

### Implement a Superhero Detail component to contain the following fields: 

- Superhero Name: Textbox
  - Validation:
    - Required 
- Secret Identity: Textbox 
- Age at Origin: NumberInput 
  - Validation:  
    - Type: Number 
    - Min Value: 0 
- First Appearance: NumberInput 
  - Validation: 
    - Required 
    - Type: Number 
    - Min Value: 1900 
    - Max Value: next year 
- Alien?: Checkbox (ignore planet of origin in JSON) 
- Origin Story: TextArea 
  - Validation 
    - Required 
    - Max Length: 5000 characters 
- Wiki URL: Textbox 
  - Validation:  
    - Is Valid Link 
- Universe (eg. Marvel, DC, Others): Single-select Dropdown 
  - Validation:  
    - Required 
- Abilities: Mutli-Select Dropdown 

The Superhero Detail component should have buttons for saving and deleting.