import { Component } from '@angular/core';
import { TeamTrackerService } from '../team-tracker.service';

@Component({
  selector: 'app-team-tracker',
  templateUrl: './team-tracker.component.html',
  styleUrls: ['./team-tracker.component.css'],
  providers: [TeamTrackerService],
})
export class TeamTrackerComponent {}
