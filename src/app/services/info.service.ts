import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'; 
import { Contacto } from 'src/Models/contacto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class InfoService{

    public formulario: any[] = [];

    URL = 'http://localhost:3000/contacts/obtener'  //environment.urlServer;

    constructor(private http: HttpClient){  }

        guardarContacto(contacto: Contacto): Observable <any>{
            return this.http.post(this.URL, contacto)
        //this.cargarFormulario();

    }

    
       /*getName(){
        return this.http.get<any>("/api/contacto")
    }

       private cargarFormulario(){
          this.http.post('mongodb+srv://agustinamiceli:Agustina15@jeweliverycluster.lgyaf4g.mongodb.net/test') 
        .subscribe((resp: any) => {
            this.formulario=resp;
            console.log(resp);

        
        })
    }*/
}

