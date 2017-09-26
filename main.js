'use strict'

class Employee {
  constructor(staffId, dept) {
    this._staffId = staffId;
    this._dept = dept;
    

  }
  
 set staffId(newstaffId) {
  this._staffId = newstaffId;
  }
  
  get staffId(){
     return this._staffId;
    
  }
  set dept(staffDept){
    this._dept = staffDept;
  }
  get dept(){
    return this._dept;
  }
  
     level(){
       
       if(this.staffId > 5){
      console.log("Managerial Staff");
    }else{
      console.log("Junior Employee");
    }
    
    if(this.dept == 1){
      console.log("Customer Service Dept")
    }else if (this.dept == 2){
      console.log("Finance Dept")
    }else{
      console.log("Admin Dept")
    }
     }
  
  
}