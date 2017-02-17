import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Character } from '../../components/character/character';
import { EndpointService } from '../../components/endpoint/endpoint.service';

@Injectable()
export class ShipService {
  constructor(private http: Http, private endpointService: EndpointService) { }

  getCurrentShip(character: Character): Observable<any> {
    const url = this.endpointService.constructESIUrl('v1/characters', character.characterId, 'ship');
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + character.accessToken);
    return this.http.get(url, {headers: headers}).map((response: Response) => {
      if (response.status === 200) {
        const rep = response.json();
        return {
          id: rep['ship_type_id'],
          name: rep['ship_name'],
        };
      } else {
        throw new Error();
      }

    }).retry(1).catch((error) => {
      const response = {id: -1, name: 'Error'};
      return Observable.of( response );
    });
  }
}
