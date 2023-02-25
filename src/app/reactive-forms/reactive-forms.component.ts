import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonModel } from '../models/person.model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  addForm: FormGroup;
  updateForm: FormGroup;

  isUpdateFormActive: boolean  = false;

  persons: any[] = [];
  person: PersonModel = new PersonModel();
  updatePerson: PersonModel = new PersonModel();
  index: number = 0;
  constructor(){

  }
  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.addForm = new FormGroup({
      firstName: new FormControl("",[Validators.minLength(3),Validators.required]),
      lastName: new FormControl("",[Validators.required, Validators.minLength(3)]),
      email: new FormControl("",[Validators.email, Validators.required]),
      address: new FormGroup({
        street: new FormControl(""),
        city: new FormControl(""),        
      })
    });
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      firstName: new FormControl("",[Validators.minLength(3),Validators.required]),
      lastName: new FormControl("",[Validators.required, Validators.minLength(3)]),
      email: new FormControl("",[Validators.email,Validators.required]),
      address: new FormGroup({
        street: new FormControl(""),
        city: new FormControl(""),
      })
    });
  }

  fillAddForm(){
    this.addForm.patchValue({
      firstName: "Taner",
      lastName: "Saydam",
      address:{
        city: "Kayseri"
      }
    })
  }

  changeInputClassForValidation(input: any){
    console.log(input)
    if(!input.dirty && input.untouched)
      return "form-control"
    

    if(input.valid){
      return "form-control is-valid"
    }else{
      return "form-control is-invalid"
    }
  }

  add(){
    if(this.addForm.valid){
      this.persons.push(this.person);
      this.person = new PersonModel();
      this.person.address.city = "Kayseri";      
    }else{
      alert("Zorunlu alanları doldurmadınız!");
    }
  }
  
  get(model: PersonModel, index: number){
    this.createUpdateForm();
    this.updatePerson = {...model};
    this.isUpdateFormActive = true;
    this.index = index;
  }

  cancel(){
    this.isUpdateFormActive = false;    
  }

  update(){
    if(this.updateForm.valid){
      this.persons[this.index]= this.updatePerson;
      this.cancel();
    }
  }

  delete(index: number){
    let result = confirm("Person kaydını silmek istiyor musunuz?");
    if(result){
      this.persons.splice(index,1);
    }
  } 
}
