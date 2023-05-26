import { Component, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent {
  public characters: Character[] = [];
  @Input() page: number = 1;
  @Input() pageShowed: number = 0;
  @Input() pageSize: number = 20;

  constructor(
    private characterService: CharacterService,
  ) {
  }

  ngOnInit(): void {
    //obtenemos los
    //this.heroes = this.heroService.getHeroes();
    this.getCharacters();
  }

  //Por defecto una propiedad es pública
  //strig no sería necesario si inicializamos la variable directamente

  public getCharacters(): void {
    this.characterService.getAllCharacters(this.page, this.pageSize).subscribe(characters => {
      this.characters = characters;
      });
  }

  public previousPage(): void {
    this.page -= 1;
    this.pageShowed -= 20;
    this.getCharacters();
  }

  public nextPage(): void {
    this.page += 1;
    this.pageShowed += 20
    this.getCharacters();
  }
}
