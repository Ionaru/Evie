import Timer = NodeJS.Timer;

export class Character {
  characterId: number;
  pid: string;
  name: string;
  accessToken: string;
  scopes: Array<string>;
  tokenExpiry: Date;
  ownerHash: string;
  gender: string;
  corporation_id: number;
  corporation: string;
  alliance_id: number;
  alliance: string;
  race: string;
  bloodline: string;
  ancestory: string;
  balance = 0;
  walletJournal: Array<Object> = [];
  walletTransactions: Array<Object> = [];
  currentlyTraining = 0;
  skillQueue: Array<number> = [];
  assets: Array<Object> = [];
  planets: Array<Object> = [];
  mails: Array<Object> = [];
  location: {
    id?: number;
    name?: string | null;
  } = {};
  currentShip: {
    id?: number;
    name?: string;
    type?: string | null;
  } = {};
  refreshTimer: Timer;

  constructor(data: ApiCharacterData) {
    this.characterId = data.characterId;
    this.name = data.name;
    this.accessToken = data.accessToken;
    this.ownerHash = data.ownerHash;
    this.pid = data.pid;
    this.scopes = data.scopes.split(' ');
    this.tokenExpiry = new Date(data.tokenExpiry);
  }

  updateAuth(data: ApiCharacterData): void {
    this.characterId = data.characterId;
    this.name = data.name;
    this.accessToken = data.accessToken;
    this.ownerHash = data.ownerHash;
    this.pid = data.pid;
    this.scopes = data.scopes.split(' ');
    this.tokenExpiry = new Date(data.tokenExpiry);
  }
}
