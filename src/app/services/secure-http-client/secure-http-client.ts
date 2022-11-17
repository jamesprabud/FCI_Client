import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageKeys } from '../../models/local-storage-keys/LocalStorageKeys';


@Injectable({
  providedIn: 'root'
})
export class SecureHttpClient {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  public post(url: string, body: any, whitelisted = false): Observable<any> {
    return this.httpClient.post(url, body, { headers: this.getHttpHeaders(whitelisted) }).pipe(
      catchError((err) => this.errorHandler(err))
    );
  }

  public patch(url: string, body: any, whitelisted = false): Observable<any> {
    return this.httpClient.patch(url, body, { headers: this.getHttpHeaders(whitelisted) }).pipe(
      catchError((err) => this.errorHandler(err))
    );
  }

  public delete(url: string, body: any, whitelisted = false): Observable<any> {
    return this.httpClient.request('delete', url, { body: body, headers: this.getHttpHeaders(whitelisted) }).pipe(
      catchError((err) => this.errorHandler(err))
    );
  }

  public get(url: string, whitelisted = false): Observable<any> {
    return this.httpClient.get(url, { headers: this.getHttpHeaders(whitelisted) }).pipe(
      catchError((err) => this.errorHandler(err))
    );
  }

  public put(url: string, body: any, whitelisted = false, includeHeaders = true): Observable<any> {
    if (includeHeaders) {
      return this.httpClient.put(url, body, { headers: this.getHttpHeaders(whitelisted) }).pipe(
        catchError((err) => this.errorHandler(err))
      );
    } else {
      return this.httpClient.put(url, body).pipe(
        catchError((err) => this.errorHandler(err))
      );
    }
  }

  public download(url: string, whitelisted = false): Observable<any> {
    const headers = this.getHttpHeaders(whitelisted).set('Content-Type', 'application/octet-stream');
    return this.httpClient.get(url, { headers: headers, responseType: 'blob' }).pipe(
      catchError((err) => this.errorHandler(err))
    );
  }

  public postDownload(url: string, body: any, whitelisted = false): Observable<any> {
    return this.httpClient.post(url, body, { headers: this.getHttpHeaders(whitelisted), responseType: 'blob' as 'json' }).pipe(
      catchError((err) => this.errorHandler(err))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 302) {
      this.router.navigate(['userIsBlocked']);
    }
    if (error.status === 401) {
      this.router.navigate(['logout']);
    }
    return throwError(error);
  }

  private getHttpHeaders(whitelisted: boolean): HttpHeaders {
    const accessToken = localStorage.getItem(LocalStorageKeys.Authentication.AccessToken);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${accessToken}`);
    if (!whitelisted) {
      const userInfoHeader = localStorage.getItem(LocalStorageKeys.User.UserInfoToken);
      if(userInfoHeader){
        headers = headers.set('user_info', userInfoHeader);
      }
    }
    return headers;
  }

  public getGoogleApi(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(
      catchError((err) => this.errorHandler(err))
    );
  }
}
