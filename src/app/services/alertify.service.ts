import { Injectable } from '@angular/core';
declare let alertify:any

// service in service olması için üzerinde bu 
//dekoratör ün olması gerekiyor.
// alttaki root ifadesi global olduğunu söylüyor.
@Injectable()

export class AlertifyService {

  constructor() { }
  success(message:string){
    alertify.success(message)
  }

  error(message:string){
    alertify.error(message)
  }
  
  warning(message:string){
    alertify.warning(message)
  }


}
