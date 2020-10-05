import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { UserServeceService } from '../../app/user-servece.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public baseUrl;
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private UserServeceService:UserServeceService) {
    this.baseUrl = baseUrl;
    
  }


  user: any;

  users: User[];
  userForm: FormGroup;
  submitted = false;
  EventValue: any = "Save"; 
 
  ngOnInit() {
    this.getdata();

    this.userForm = new FormGroup({
      ID: new FormControl(null),
      Name: new FormControl("", [Validators.required]),
      isActive: new FormControl(true),
      
    })    
  }
  async getdata() {
    this.UserServeceService.getData().subscribe((data: any[]) => {
      this.users = data;
    })
  }
  deleteData(id) {
    this.UserServeceService.deleteData(id).subscribe((data: any[]) => {
      this.user = data;
      this.getdata();
    })
  }
  Save() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this.UserServeceService.postData(this.userForm.value).subscribe((data: any[]) => {
      this.user = data;
      this.resetFrom();

    })
  }
  Update() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this.UserServeceService.putData(this.userForm.value.ID, this.userForm.value).subscribe((data: any[]) => {
      this.user = data;
      this.resetFrom();
    })
  }

  EditData(Data) {
    this.userForm.controls["ID"].setValue(Data.id);
    this.userForm.controls["Name"].setValue(Data.name);
    this.userForm.controls["isActive"].setValue(Data.isActive);
    
    this.EventValue = "Update";
  }

  resetFrom() {
    this.getdata();
    this.userForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }
}  




interface User {
  id: number;
  Name: string;
  isAcive: boolean;

}
