import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ConfigurationService {
  public getCallbackUrl() {
    return environment.callbackUrl;
  }

  public getApiUrl() {
    return environment.apiUrl;
  }

  public getBaseUrl() {
    return environment.baseUrl;
  }

  public getAuth0ClientId() {
    return environment.auth0ClientId;
  }

  public getAuth0Domain() {
    return environment.auth0Domain;
  }

  public getAuth0Audience() {
    return environment.auth0Audience;
  }

  public getGoogleApiKey(): string {
    return environment.googleApiKey;
  }

  public getTimeZoneApiURL(): string {
    return environment.timeZoneApiURL;
  }
}
