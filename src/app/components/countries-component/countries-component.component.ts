import { Component, Input } from '@angular/core';
import { Contry } from '../../models/contrys';

@Component({
  selector: 'app-countries-component',
  standalone: true,
  imports: [],
  templateUrl: './countries-component.component.html',
  styleUrl: './countries-component.component.scss'
})
export class CountriesComponentComponent {
  @Input() selectedCountry!: Contry
}
