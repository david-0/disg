import {Injectable} from '@angular/core';
import {isUndefined} from 'util';

@Injectable()
export class ModuleService {

  private availableModules: Map<number, string> = new Map<number, string>();
  public loadedModules: Set<number> = new Set<number>();

  constructor() {
    this.availableModules.set(9382, 'Selbsteinschätzung');
    this.availableModules.set(1720, 'Details: Dominat');
    this.availableModules.set(6288, 'Details: Initiativ');
    this.availableModules.set(8471, 'Details: Stetig');
    this.availableModules.set(4343, 'Details: Gewissenhaft');
    this.loadState();
  }

  public loadModule(number: number) {
    const moduleName = this.availableModules.get(number);
    if (!isUndefined(moduleName)) {
      this.loadedModules.add(number);
      this.saveState();
    }
  }

  public getModuleName(number: number) {
    return this.availableModules.get(number);
  }

  private saveState() {
    localStorage.setItem('modules', JSON.stringify(Array.from(this.loadedModules.values())));
  }

  private loadState() {
    const value = localStorage.getItem('modules');
    if (value !== null) {
      this.loadedModules.clear();
      JSON.parse(value)//
        .filter(nr => this.availableModules.get(nr)) //
        .forEach(nr => this.loadedModules.add(nr));
      this.saveState();
    }
  }
}
