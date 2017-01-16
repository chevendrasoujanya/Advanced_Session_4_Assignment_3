var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var department = (function () {
    function department(name) {
        this.name = name;
    }
    department.prototype.printName = function () {
        console.log("I am from " + this.name + ". Hearty Congratulations on your Success");
    };
    return department;
}());
var accountingDepartment = (function (_super) {
    __extends(accountingDepartment, _super);
    function accountingDepartment(name) {
        return _super.call(this, name) || this;
    }
    accountingDepartment.prototype.printMeeting = function () {
        console.log("We are conducting a team meeting on 18-Jan-2017. We request you to attend the meeting");
    };
    return accountingDepartment;
}(department));
var accountingDepartmentObj = new accountingDepartment("Accounts Department");
accountingDepartmentObj.printName();
accountingDepartmentObj.printMeeting();
var hrDepartment = (function (_super) {
    __extends(hrDepartment, _super);
    function hrDepartment(name) {
        return _super.call(this, name) || this;
    }
    hrDepartment.prototype.printMeeting = function () {
        console.log("Hi Team, We are having a team meet on 20-01-2017. Everyone's presence is a must.");
    };
    return hrDepartment;
}(department));
var hrDepartmentObj = new hrDepartment("HR Department");
hrDepartmentObj.printName();
hrDepartmentObj.printMeeting();
var salesDepartment = (function (_super) {
    __extends(salesDepartment, _super);
    function salesDepartment(name) {
        return _super.call(this, name) || this;
    }
    salesDepartment.prototype.printMeeting = function () {
        console.log("Hi Team, Management is very happy with the results of this Quarter. We are having team meet on 22-01-2017. Everyone's presence is a must");
    };
    return salesDepartment;
}(department));
var salesDepartmentObj = new salesDepartment("Sales Department");
salesDepartmentObj.printName();
salesDepartmentObj.printMeeting();
