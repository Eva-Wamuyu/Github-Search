import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinSearchWordsPipe'
})
export class JoinSearchWordsPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
