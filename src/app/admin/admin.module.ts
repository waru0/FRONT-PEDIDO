import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { AdminRoutingModule } from './admin-routing.module';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AdminComponent,
    PedidoComponent,
    ClienteComponent,
    ProductoComponent,
    Navbar2Component,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule], //rutas de Adm
})
export class AdminModule {}
