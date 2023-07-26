export interface WorkExperience{
  pId:number;
    id: string;
    name:string;
    description:string;
  createdBy: string,
  createdDate: string,
  updatedDate: string,
  updatedBy: string,
  status:number,
  empId: string,
  companyName: string,
  postionHeld: string,
  from: string,
  to: string,
  salary: number,
  reasonTermination: string,

}
export interface Education{
  pId:number;
    id?: string;
  createdBy: string,
  createdDate: string,
  updatedDate: string,
  updatedBy: string,
  status:number,
  empId: string,
  from: string,
  to: string,
  nameOfInstitute: string,
  fieldOfStudy: string,
  eductionName: string,
}