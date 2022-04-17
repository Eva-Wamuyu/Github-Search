import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'joinWord'
})
export class JoinSearchWordsPipePipe implements PipeTransform {

  transform(value: any,): string {

   let joinedString =  value.join("");
    return joinedString;
  }

}
