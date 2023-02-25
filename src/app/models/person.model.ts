import { AddressModel } from "./address.model";

export class PersonModel{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: AddressModel;

    constructor(){
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.address = new AddressModel();
    }
}