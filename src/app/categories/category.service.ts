import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Category } from './category.dto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Category[]>(environment.api + 'categories')
  }

  public save(category: Category): Observable<Category> {
    if (category.id)
      return this.http.put<Category>(
        environment.api + 'categories/' + category.id,
        category
      )
    
    return this.http.post<Category>(environment.api + 'categories', category)
  }
}
