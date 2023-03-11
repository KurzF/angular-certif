import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from './nba.service';

@Injectable()
export class TeamTrackerService {
  public trackedTeams = new Set<Team>();
  //public trackedTeam: Observable<Set<Team>> = this.trackedTeams$.asObservable();

  constructor() {}
}
