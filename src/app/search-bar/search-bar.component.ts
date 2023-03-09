import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Team, TeamsService } from '../teams.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  public teams: Observable<Team[]> = this.teamsService.getAllTeams().pipe(map(page => page.data));
  constructor(public teamsService: TeamsService) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
