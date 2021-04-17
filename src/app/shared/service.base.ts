import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class ServiceBase {
  protected url = environment.apiUrl;

  constructor(protected http: HttpClient) {}
}
