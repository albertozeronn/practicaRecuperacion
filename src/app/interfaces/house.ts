import { Character } from "./character";

export interface House{
    url: string,
	name: string,
	region: string,
	coatOfArms: string,
	words: string,
	titles: string[],
	seats: string[],
	currentLord: string,
	heir: string,
	overlord: string,
	founded: string,
	founder: string,
	diedOut: string,
	ancestralWeapons: string[],
	cadetBranches: House[]
    swornMembers: Character[]
}