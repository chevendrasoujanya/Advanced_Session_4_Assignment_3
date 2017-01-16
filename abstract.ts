abstract class department {
    public name: string;
    constructor(name) {
        this.name = name;
    }

    printName(): void {
        console.log(`I am from ${this.name}. Hearty Congratulations on your Success`);
    }

    abstract printMeeting(): void;
}

class accountingDepartment extends department {
    constructor(name) {
        super(name);
    }
    printMeeting(): void {
        console.log("We are conducting a team meeting on 18-Jan-2017. We request you to attend the meeting");
    }
}

let accountingDepartmentObj = new accountingDepartment("Accounts Department");
accountingDepartmentObj.printName();
accountingDepartmentObj.printMeeting();

class hrDepartment extends department {
    constructor(name) {
        super(name);
    }
    printMeeting(): void {
        console.log("Hi Team, We are having a team meet on 20-01-2017. Everyone's presence is a must.");
    }
}

let hrDepartmentObj = new hrDepartment("HR Department");
hrDepartmentObj.printName();
hrDepartmentObj.printMeeting();

class salesDepartment extends department {
    constructor(name) {
        super(name);
    }

    printMeeting(): void {
        console.log("Hi Team, Management is very happy with the results of this Quarter. We are having team meet on 22-01-2017. Everyone's presence is a must");
    }
}

let salesDepartmentObj = new salesDepartment("Sales Department");
salesDepartmentObj.printName();
salesDepartmentObj.printMeeting();