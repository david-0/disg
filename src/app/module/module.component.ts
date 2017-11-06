import {Component, OnInit} from '@angular/core';
import {ModuleService} from '../service/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  public moduleNumber: string;

  constructor(public moduleService: ModuleService) {
  }

  ngOnInit() {
  }

  loadModule() {
    this.moduleService.loadModule(+this.moduleNumber);
    this.moduleNumber = '';
  }

  resetModules() {
    this.moduleService.resetModules();
  }
}
