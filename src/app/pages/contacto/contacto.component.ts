import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InfoService } from '../../services/info.service';
import { Contacto } from '../../../Models/contacto';


@Component({
    selector:'app-contacto',
    templateUrl: './contacto.component.html'
})

export class PagarComponent implements OnInit { 

    consultaform:FormGroup;

    constructor(private InfoService: InfoService, private fb:FormBuilder){ 
        this.consultaform= this.fb.group({
        nombre:['', Validators.required],
        whatsapp:['', Validators.required],
        email:['', Validators.required],
        mensaje:['', Validators.required]
    })
    }
    ngOnInit(): void {
        this.realizarConsulta()
       // throw new Error("Method not implemented.");
    }

    realizarConsulta(){
    const Contacto: Contacto = {
        nombre: this.consultaform.get('nombre')?.value,
        whatsapp:this.consultaform.get('whatsapp')?.value, 
        email: this.consultaform.get('email')?.value,
        mensaje: this.consultaform.get('mensaje')?.value,   
    }

 

    this.InfoService.guardarContacto(Contacto).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
    })
    this.consultaform.reset({});
    

}

enviarDatos(){
    const Contacto: Contacto = {
        nombre: this.consultaform.get('nombre')?.value,
        whatsapp:this.consultaform.get('whatsapp')?.value, 
        email: this.consultaform.get('email')?.value,
        mensaje: this.consultaform.get('mensaje')?.value,   
    }
this.InfoService.guardarContacto(Contacto).subscribe({
    next: (_err) => {
        console.error
    }});
}
}


