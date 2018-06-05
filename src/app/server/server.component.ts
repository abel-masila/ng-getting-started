import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: red;
      }
      .offline {
        color: green;
      }
    `
  ]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Ofline';
  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
  getServerStatus() {
    return this.serverStatus;
  }
}
