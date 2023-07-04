import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FooPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // 123 { metatype: [Function: Number], type: 'param', data: 'foo' }
    // 222 { metatype: [Function: String], type: 'query', data: 'aaa' }
    console.log(value, metadata);

    // return 'aaa';
    return value;
  }
}
