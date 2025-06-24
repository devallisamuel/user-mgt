import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';

import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, ...SharedModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
