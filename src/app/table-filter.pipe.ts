import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})

@Injectable()

export class TableFilterPipe implements PipeTransform {
  transform(list: any[], filters: Record<string,unknown>) {
    const keys       =Object.keys(filters).filter(key => filters[key]);
    const filterUser = (_: Record<string,unknown>) => keys.every(key => _[key] === filters[key]);
    return keys.length ? list.filter(filterUser) : list;
  }
}
