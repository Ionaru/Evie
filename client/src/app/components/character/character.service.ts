/// <reference path="./character.d.ts" />

import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable } from 'rxjs';
import { EndpointService } from '../endpoint/endpoint.service';
import { Globals } from '../../globals';
import { Headers, Response, Http } from '@angular/http';
import { processXML } from '../helperfunctions.component';

@Injectable()
export class CharacterService {

  constructor(private es: EndpointService, private globals: Globals, private http: Http) { }

  public getCharacterData(character: Character): Observable<Character> {
    let url: string = this.es.constructUrl(this.es.getEndpoint('CharacterSheet'), [
      'characterID=' + ''
    ]);
    let headers: Headers = new Headers();
    headers.append('Accept', 'application/xml');
    return this.http.get(url, {
      headers: headers
    }).map((res: Response) => {
      let data: Object = processXML(res)['eveapi'];
      console.log(data);
      character.corporation = data['result']['corporationName']['#text'];
      character.corporation_id = data['result']['corporationID']['#text'];
      character.alliance = data['result']['allianceName']['#text'];
      character.alliance_id = data['result']['allianceID']['#text'];
      return character;
    });
  }

  public registerCharacter(data: CharacterData) {
    let character = new Character(data);

    setInterval(() => {
      this.refreshToken(character);
    }, 15 * 60 * 1000);

    return character;
  }

  public refreshToken(character: Character){
    let pid = character.pid;
    let accessToken = character.accessToken;
    let url = `/sso/refresh?pid=${pid}&accessToken=${accessToken}`;
    this.http.get(url).map((res: Response) => {
      console.log(res);
      console.log(res['body']);
    });
  }
}
