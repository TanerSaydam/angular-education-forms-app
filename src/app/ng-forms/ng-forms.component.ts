import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonModel } from '../models/person.model';

@Component({
  selector: 'app-ng-forms',
  templateUrl: './ng-forms.component.html',
  styleUrls: ['./ng-forms.component.css']
})
export class NgFormsComponent {
  @ViewChild("addForm") form: NgForm;

  persons: PersonModel[] = [];
  addPerson : PersonModel = new PersonModel();

  constructor(){
    this.addPerson.address.city = "0";
  }

  add(form: NgForm){
    if(form.valid){
      //console.log(this.addPerson);
      //console.log(this.form);
      console.log(form.value);
    }
  }

  get(model: PersonModel, index: number){

  }

  delete(index: number){

  }

  changeInputClassForValidation(input: any){
    //console.log(input)
    if(input == undefined)
      return "form-control"

    if(!input.dirty && input.untouched)
      return "form-control"
    

    if(input.valid){
      return "form-control is-valid"
    }else{
      return "form-control is-invalid"
    }
  }

  changeSelectClassForValidation(select:any){
    if(select == undefined)
    return "form-control"

    if(select.value == 0){
      return "form-control is-invalid" 
    }else{
      return "form-control is-valid"
    }
  }
}
