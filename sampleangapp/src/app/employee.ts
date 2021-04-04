export class Employee {
    
    empId:number | undefined;
    empName:string | undefined;
    skills : string[] = ['java','angular'];

    constructor(){ }
    
    addSkill(skill:string)
    {
        this.skills.push(skill);
    }
}
