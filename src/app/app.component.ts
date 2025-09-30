import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContrysService } from './services/contrys.service';
import { CountriesComponentComponent } from "./components/countries-component/countries-component.component";
import { FormControl } from '@angular/forms';
import { Contry } from './models/contrys';
import { UppercaseDirective } from "./directive/uppercase.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesComponentComponent, UppercaseDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private contrysServices = inject(ContrysService)

  searchControl = new FormControl('', {nonNullable:true})
  contries: Contry[] = [];
  selectedCountry!:  Contry

  ngOnInit():void{
    this.loadContrys()
  }

  loadContrys(){
    this.contrysServices.getContrys().subscribe({
      next: (data) => {
        this.contries = data
      }
    })
    console.log(this.contries)

  }

  selectContry(contry: Contry){
    this.selectedCountry = contry
    console.log(this.selectContry)

  }



}
