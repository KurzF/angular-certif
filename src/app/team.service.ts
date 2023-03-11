import { Injectable } from '@angular/core';
import { Team } from './nba.service';

@Injectable()
export class TeamService {
  public team?: Team;
  constructor() {}
}
