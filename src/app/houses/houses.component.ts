import { Component, Input } from '@angular/core';
import { House } from '../interfaces/house';
import { HousesService } from '../houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent {
  public houses: House[] = [];
  @Input() page: number = 1;
  @Input() pageShowed: number = 0;
  @Input() pageSize: number = 20;

  constructor(
    private housesService: HousesService,
  ) {
  }

  ngOnInit(): void {
    //obtenemos los
    //this.heroes = this.heroService.getHeroes();
    this.getHouses();
  }
  public getHouses(): void {
    this.housesService.getAllHouses(this.page, this.pageSize).subscribe(houses => {
      this.houses = houses;
      });
  }

  public previousPage(): void {
    this.page -= 1;
    this.pageShowed -= 20;
    this.getHouses();
  }

  public nextPage(): void {
    this.page += 1;
    this.pageShowed += 20;
    this.getHouses();
  }
}
