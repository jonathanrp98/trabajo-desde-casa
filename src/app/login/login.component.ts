import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import {Usuario} from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  constructor(private authService: AuthService, private router:Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login(): void{
    console.log(this.usuario);
    if(this.usuario.username == null || this.password == null){
      alert("Ingrese los datos sugeridos")
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      this.router.navigate(['/decano']);
      alert("Bienvenido");
    });
  }


}
