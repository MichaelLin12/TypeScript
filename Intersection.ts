type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ['createserver'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Number;

function ADD(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){

    }
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }
}

printEmployeeInformation(e1);

class Car{
    drive(){
        console.log('Driving...')
    }
}


class Truck{
    drive(){
        console.log('Driving a truck ...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    /*
    if('loadCargo' in vehicle){
        vehicle.loadCargo(1000)
    }
    */

    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}