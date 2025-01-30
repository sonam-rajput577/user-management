import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private storageKey = 'users';
 

  constructor() {
   
    if (!localStorage.getItem(this.storageKey)) {
      const initialUsers: Users[] = [
        { id: 1, name: 'Sonam', email: 'sonam@gmail.com', role: 'Admin' },
        { id: 2, name: 'Gaurav', email: 'gaurav@gmail.com', role: 'User' },
        { id: 3, name: 'Raj', email: 'raj@gmail.com', role: 'Admin' },
        { id: 4, name: 'Raju', email: 'raju@gmail.com', role: 'User' },
        { id: 5, name: 'Poonam', email: 'poonam@gmail.com', role: 'Admin' },
        { id: 6, name: 'Goyal', email: 'goyal@gmail.com', role: 'User' },
        { id: 7, name: 'Dheeraj', email: 'dheeraj@gmail.com', role: 'Admin' },
        { id: 8, name: 'Sheetal', email: 'sheetal@gmail.com', role: 'User' },
        { id: 9, name: 'Rai', email: 'rai@gmail.com', role: 'Admin' },
        { id: 10, name: 'Rani', email: 'rani@gmail.com', role: 'User' },
        { id: 11, name: 'Sonal', email: 'sonal@gmail.com', role: 'Admin' },
        { id: 12, name: 'Prachi', email: 'prachi@gmail.com', role: 'User' }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialUsers));
    }
  }

  
  getUsers(): Users[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

 
  addUser(user: Users): void {
    const users = this.getUsers();
    user.id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1; 
    users.push(user);
    this.saveUsers(users);
  }

 
  updateUser(updatedUser: Users): void {
    let users = this.getUsers();
    users = users.map(user => user.id === updatedUser.id ? updatedUser : user);
    this.saveUsers(users);
  }

  /** Delete a user by ID */
  deleteUser(userId: number): void {
    let users = this.getUsers();
    users = users.filter(user => user.id !== userId);
    this.saveUsers(users);
  }

  /** Save users array to localStorage */
  private saveUsers(users: Users[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}

