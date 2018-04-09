import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  constructor() {
  }

  getData(): [any] {
    return [
      {name: "Julien", role: "Lead-Dev", status: 1},
      {name: "Christophe", role: "Dev Junior", status: 1},
      {name: "Roby", role: "Dev Junior", status: 1},
    ];
  }
}
