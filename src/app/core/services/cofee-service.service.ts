import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cofee } from '../interface/cofee.interface';

@Injectable({
  providedIn: 'root'
})
export class CofeeServiceService {

  SERVICE_URL = 'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

  constructor(
    private http: HttpClient
  ) {}

  getCofees(): Observable<any> {
    return this.http.get(this.SERVICE_URL);
  }

}
