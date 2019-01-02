import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      { id: 1, username: 'Admin' },
      { id: 2, username: 'User' },
      { id: 3, username: 'Doode' },
      { id: 4, username: 'Abu' },
      { id: 5, username: 'Sss' },
      { id: 6, username: 'wasd' },
      { id: 7, username: 'qwerty' },
      { id: 8, username: 'op-pa' },
    ];
    return { users };
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
