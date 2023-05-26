import { Component } from '@angular/core';
import { HousesService } from '../houses.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { House } from '../interfaces/house';
import { Character } from '../interfaces/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.sass']
})
export class HouseDetailComponent {
  public totalMembers: number | undefined;
  public selectedHouse: House | undefined;
  public currentLord: Character | undefined;
  public heir: Character | undefined;
  public founder: Character | undefined;
  public overlord: House | undefined;

  constructor(
    private route: ActivatedRoute,
    private houseService: HousesService,
    private characterService: CharacterService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')?.toString() || '';
    this.houseService.getHouseById(id).subscribe(house => {
      this.selectedHouse = house;
      this.totalMembers = house.swornMembers.length;
      this.characterService.getCharacterByUrl(house.currentLord).subscribe(character => {
        this.currentLord = character;
      });
      this.characterService.getCharacterByUrl(house.heir).subscribe(character => {
        this.heir = character;
      });
      this.characterService.getCharacterByUrl(house.founder).subscribe(character => {
        this.founder = character;
      });
      this.houseService.getHouseByUrl(house.overlord).subscribe(house => {
        this.overlord = house;
      });
    });


    
  }

  public goBack(): void {
    this.location.back();
  }
}
