import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';
  mongourl='http://localhost:8080/api/user';
  hardwareapiurl='';

  RegisterUser(inputdata:any){
    return this.http.post(this.mongourl,inputdata)
  }
  GetUserbyCode(username:any){
    return this.http.get(this.mongourl+'/'+username);
  }
  Getall(){
    return this.http.get(this.mongourl);
  }
  updateuser(username:any,inputdata:any){
    return this.http.put(this.mongourl+'/'+username,inputdata);
  }
  CallHardware(userid:any){
     return this.http.post(this.hardwareapiurl,userid);
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
}