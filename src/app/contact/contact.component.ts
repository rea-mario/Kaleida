import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Model} from '../Modelos/correo';
import './../../assets/js/smtp.js';     
declare let Email: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showMask:boolean = false;
  model: Model = new Model();
  public loginForm:FormGroup;
  mailText:string = "";
  telText:string = "";
  name = 'test';
  links : any[]= ["link1.com", "link2.com", "link3.com"];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group(
      {
        name:['',Validators.required],
        tel:['',Validators.required],
        asunto:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        comment:['',Validators.required],
      }
    );
  }
  get f() { return this.loginForm.controls; }
  
  public submitLogin():void{
    const valores = this.loginForm.value;
    this.model.name=valores.name;
    this.model.email=valores.email;
    this.model.message=valores.comment;
    this.model.phone=valores.tel;
    this.model.subject=valores.asunto;

    
    this.showMask=true; 
    Email.send({
      Host : 'smtp.office365.com',
      Username : 'rea-mario@aramark.com.mx',
      Password : 'Sistemas2022',
      Port:'587',
      
      To :  this.model.email,
      From : 'rea-mario@aramark.com.mx',
      Subject : this.model.subject,
      Body : `
      <i>comentario enviado desde web.</i> 
      <br/> <b>Nombre: </b>${this.model.name} 
      <br /> <b>Correo: </b>${this.model.email}<br /> 
      <b>Asunto: </b>${this.model.subject}<br /> 
      <b>Telefono: </b>${this.model.phone}<br /> 
      <b>Mensaje:</b> 
      <br /> 
      ${this.model.message} 
      <br>
      <br> 
      <b>~Final de mensaje.~</b> `
      }).then( message => { this.loginForm.reset();this.showMask=false } );
    
    }
  
  
  llamar(){
    this.telText = "tel:+5555396097";
    window.location.href = this.telText;
  }
  mailMe(){
    this.mailText = "mailto:contacto@kaleida.mx+?subject=files&body="+this.links.join(" ,"); // add the links to body
    window.location.href = this.mailText;
  }

}
