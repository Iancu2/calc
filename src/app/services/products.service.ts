import { Injectable } from "@angular/core";
import { Products } from "../products/products.component";
@Injectable({providedIn: "root"})
export class productsService {
    productss: Products[] = [
        {
            id:0,
            title: "Calc1",
            description: "Descriere1",
            price:4000
         },
         {
            id:1,
            title: "Calc2",
            description: "Descriere2",
            price:3500
         },
         {
            id:2,
            title: "Calc3",
            description: "Descriere3",
            price:4500
         },
         {
            id:3,
            title: "Calc4",
            description: "Descriere4",
            price:2500
         },
         {
            id:4,
            title: "Calc5",
            description: "Descriere5",
            price:6500
         },
         {
            id:5,
            title: "Calc6",
            description: "Descriere6",
            price:7000
         },
      
         
    ] 
    getProduct(){
        return this.productss;
    }
}