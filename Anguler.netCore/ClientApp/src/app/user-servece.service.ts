import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable() 
export class UserServeceService {
  

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getData() {

    return this.http.get('/api/Users');  //https://localhost:44352/ webapi host url  
  }

  postData(formData) {
    return this.http.post('/api/Users', formData);
  }

  putData(id, formData) {
    return this.http.put('/api/Users/' + id, formData);
  }
  deleteData(uid) {
    return this.http.get('/api/Users/' + uid);
  }

} 

