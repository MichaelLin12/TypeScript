abstract class Department{
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string){
        // this.name = n;
        // this.id = id;
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    constructor(id: string, public admins: string[]){
        super(id,'IT');
    }

    describe(): void {
        console.log("IT Department - ID" + this.id);
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;
    private static instance: AccountingDepartment;

    static getInstance(){
        if(this.instance){
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2',[]);
        return this.instance;
    }

    private constructor(id: string, private reports: string[]){
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    set mostRecentReport(value: string){
        if(!value) throw new Error("Please put valid value");
        this.addReport(value);
    }

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }

        throw new Error('No report found')
    }

    describe(){
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string){
        if(name == 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }
}

//const accounting = new AccountingDepartment('d1',['Max','Menu'])
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting.mostRecentReport);
console.log(accounting);
accounting.addEmployee('Max');
accounting.addEmployee('Mantu');
accounting.describe();
accounting.printReports();
accounting.printEmployeeInformation()
accounting.mostRecentReport = ""
accounting.mostRecentReport = "Year End Report"

// const accountingCopy = {name: 's', describe:accounting.describe}
// accountingCopy.describe()

accounting.describe()