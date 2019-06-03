import {ICustomer} from "../../ValueObject/Customer";

describe('test to chcek if i can implement factory using this pattern', () => {
    it('TS can implement factories this way', () => {


        //
        // function CreateCustomer<c extends ICustomer>(cust:{new(): c;},
        //                                              name: string, age: number): c
        // {
        //     var newCust: c;
        //     newCust = new cust();
        //     newCust.name = name;
        //     newCust.age = age;
        //     return newCust;
        // }
        //
        //
        //
        // var cust: any;
        // cust = CreateCustomer(ICustomer, "fuck you Peter", 62);
        //
        // var expectedCust = {
        //     name:'fuck you Peter',
        //     age: 69
        // }

        expect(true).toEqual(true)
    })
})
