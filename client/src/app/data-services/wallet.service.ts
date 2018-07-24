import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Character } from '../models/character/character.model';
import { Helpers } from '../shared/helpers';

@Injectable()
export class WalletService {

    constructor(private http: HttpClient) { }

    public async getWalletBalance(character: Character): Promise<number> {
        const url = Helpers.constructESIURL(1, 'characters', character.characterId, 'wallet');
        const headers = new HttpHeaders({Authorization: 'Bearer ' + character.accessToken});
        const response = await this.http.get<any>(url, {headers}).toPromise<number>().catch((e: HttpErrorResponse) => e);
        if (response instanceof HttpErrorResponse) {
            return -1;
        }
        return response;
    }
}