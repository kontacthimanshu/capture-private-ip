import { Injectable } from '@angular/core';
declare let ip$;
declare let mac$;

@Injectable()
export class CapturePrivateIpService {

  constructor() { }

  fetchPrivateIpOnModernBrowsers()
  {
    ip$.fetchIps();
  }

  fetchMachineNameOnInternetExplorer()
  {
    return mac$.getMachineName();
  }
}
