export interface Division{
  pid:number;
    divisionId: String;
departmentId:String
    description:string;
  createdBy: string,
  createdDate: string,
  updatedDate: string,
  updatedBy: string,

}
export interface Step{
  id: String,
 salary: number,
salaryTypeId: String,
levelId: String;
 description:string;
createdBy: string,
createdDate: string,
updatedDate: string,
updatedBy: string,
status:0,

}
export interface Position{
  divisionId: String;
  status:number;
positionId: String,
name: string,
description:string;
createdBy: string,
createdDate: string,
updatedDate: string,
updatedBy: string,

}
export interface EmployeePosition{
  pid:number;
  id: String,

  divisionId:String,
  stepId: String,
  branchId: String,
  position: String,
  status:0,
  startDate: String,
  endDate: String
createdBy: string,
createdDate: string,
updatedDate: string,
updatedBy: string,

}
export interface Branch{
  pid:number;
  id: String,
  name: String,
  city: string,
createdBy: string,
createdDate: string,
updatedDate: string,
updatedBy: string,
status:number;

}

export interface Grade{
  levelId: String,
  positionId: string,
  description: string,
createdBy: string,
createdDate: string,
updatedDate: string,
updatedBy: string,
status:number;

}
export interface EducationLevel{

educationName:string;
pid:string;
  id: string,
createdBy: string,
createdDate: string,
updatedDate: string,
updatedBy: string,
status:number;

}