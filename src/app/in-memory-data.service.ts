import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Luffy' },
      { id: 13, name: 'Zoro' },
      { id: 14, name: 'Sanji' },
      { id: 15, name: 'Nami' },
      { id: 16, name: 'Usopp' },
      { id: 17, name: 'Jimbei' },
      { id: 18, name: 'Robin' },
      { id: 19, name: 'Chopper' },
      { id: 20, name: 'Brook' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}