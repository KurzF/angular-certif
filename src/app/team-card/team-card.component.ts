import { AfterViewInit, Component, Input } from '@angular/core';
import { TeamTrackerService } from '../team-tracker.service';
import { TeamService } from '../team.service';
import { Team, NBAService, Game } from '../nba.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css'],
  providers: [{ provide: TeamService }],
})
export class TeamCardComponent implements AfterViewInit {
  @Input()
  public team!: Team;

  public recentGames?: Observable<Game[]>;
  constructor(
    private teamTracker: TeamTrackerService,
    public nbaService: NBAService,
    public teamService: TeamService
  ) {}

  ngAfterViewInit(): void {
    this.recentGames = this.nbaService.getRecentGames(this.team.id);
    this.teamService.team = this.team;
  }

  remove() {
    this.teamTracker.trackedTeams.delete(this.team);
  }
}
