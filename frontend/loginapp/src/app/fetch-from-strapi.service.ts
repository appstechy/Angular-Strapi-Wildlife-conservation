import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FetchFromStrapiService {

  private homeApiUrl = "http://localhost:1337/api/";
  private homeApiKey = "Bearer ";
  private homeApiKey2 = "Bearer ";
  constructor(private http: HttpClient) { 
    this.homeApiKey+=environment.SUPER_API;
    this.homeApiKey2+=environment.USER_API;
  }

  fetchDataFromHomeComponent() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}homes?populate[section][populate]=*`,{headers});
  }


  fetchDataFromAboutUsComponent() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}aboutuses?populate=*`,{headers});
  }


  fetchDataFromGalleryComponent() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}galleries?populate[gallery][populate]=*`,{headers});
  }


  fetchDataFromOurTeamComponent() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}ourteams?populate[team][populate]=*`,{headers});
  }


  fetchDataFromContactUsComponent() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}contactuses?populate[team][populate]=*`,{headers});
  }


  fetchDataFromHeaderComponent() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}headers?populate=*`,{headers});
  }



  fetchDataFromFooterComponent() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}footers?populate[footer_links][populate]=*&populate[icons][populate]=*`,{headers});
  }


  registerUser(userDetails:any) {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey2,
      'Content-Type': 'application/json'
    })

    return this.http.post<any>(`${this.homeApiUrl}auth/local/register`,userDetails, {headers});
  }


  loginUser(userDetails:any) {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey2,
      'Content-Type': 'application/json'
    })

    return this.http.post<any>(`${this.homeApiUrl}auth/local`,userDetails, {headers});
  }


  fetchUserDetails(userid:any) {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey2
    })

    return this.http.get<any>(`${this.homeApiUrl}users/${userid}`, {headers});
  }


  fetchEventsDetails() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}events?populate[ongoing_events][populate]=*&populate[upcoming_events][populate]=*`, {headers});
  }


  fetchDetailsFromDashboard() {
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey
    })

    return this.http.get<any>(`${this.homeApiUrl}dashboards?populate=*`, {headers});
  }


  submitContactUsForm(data:any){
    const headers = new HttpHeaders({
      Authorization: this.homeApiKey2
    })

    return this.http.post<any>(`${this.homeApiUrl}queries`, data,{headers});
  }





}
