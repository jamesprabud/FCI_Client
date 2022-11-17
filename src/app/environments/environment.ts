import { IEnvironment } from "../services/configuration/ienvironment";

export const environment: IEnvironment = {
    apiUrl: 'http://universities.hipolabs.com/search?country=', // http://localhost:3000
    auth0Audience: 'omega-dev-api',
    auth0ClientId: 'GaIaoAEM3t446bn4VRpAt2mosuW5QZbA',
    auth0Domain: 'omega-menlo.auth0.com',
    baseUrl: 'http://localhost:4200',
    callbackUrl: 'http://localhost:4200',
    environment: 'LOCAL',
    production: false,
    googleApiKey: 'AIzaSyCoE3JDCNYB49kQubYQz9SNCiG792WxXU8',
    timeZoneApiURL: 'https://maps.googleapis.com/maps/api/timezone/json'
  };
  