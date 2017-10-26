import { Injectable } from '@angular/core';
import { User } from '../../models/users/user.model';

@Injectable()
export class App {


    private _isLoggedIn: boolean = false;
    public get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }
    public set isLoggedIn(value: boolean) {
        this._isLoggedIn = value;
    }


    private _user: User = new User();
    public get User(): User {
        return this._user;
    }
    public set User(user: User) {
        this._user = user;
    }
}