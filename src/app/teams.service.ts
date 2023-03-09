import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Page<T> {
  data: T[];
  meta: {
    total_page: number;
    current_page: number;
    per_page: number;
    total_count: number;
  };
}
export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<Page<Team>> {
    return this.http.get<Page<Team>>('https://free-nba.p.rapidapi.com/teams', {
      headers: {
        'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
    });
  }
}
