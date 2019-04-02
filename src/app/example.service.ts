import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAttribute } from './attribute-portlet/attribute-portlet.component';

export interface IExample {
  name?: string;
  describle?: string;
  image?: string;
  url?: string;
  urlTitle?: string;
  urlSrouce?: string;
  urlSrouceTitle?: string;
}

@Injectable()
export class ExampleService {

  constructor() { }

  public getAttributes(): Observable<IAttribute[]> {
    let attributes: IAttribute[] = [
      {
        Id: '1',
        Name: 'Username',
        Label: 'Tài khoản',
        Code: 'username',
        Type: 'text',
        Class: 'col-md-3'
      },
      {
        Id: '2',
        Name: 'Password',
        Label: 'Mật khẩu',
        Code: 'password',
        Type: 'password',
        Class: 'col-md-3'
      },
      {
        Id: '3',
        Name: 'DateOfBirth',
        Label: 'Ngày sinh',
        Code: 'dateofbirth',
        Type: 'date',
        Class: 'col-md-3'
      },
      {
        Id: '4',
        Name: 'Email',
        Label: 'Email',
        Code: 'email',
        Type: 'email',
        Class: 'col-md-3'
      },
      {
        Id: '5',
        Name: 'Phone',
        Label: 'Điện thoại',
        Code: 'text',
        Type: 'text',
        Class: 'col-md-3'
      },
      {
        Id: '6',
        Name: 'Address',
        Label: 'Địa chỉ',
        Code: 'address',
        Type: 'text',
        Class: 'col-md-3'
      }
    ];
    return of(attributes);
  }

  public getExamples(): Observable<IExample[]> {
    let examples = [
      {
        name: 'oNiwa',
        describle: 'Example scope angular',
        image: '//placehold.it/100',
        url: 'https://oniwa.stackblitz.com',
        urlTitle: 'Demo',
        urlSource: 'https://stackblitz.com/edit/oniwa',
        urlSourceTitle: 'Source'
      },
      {
        name: 'Fork example',
        describle: 'Fork new example with lib',
        image: '//placehold.it/100',
        url: 'https://fork-ex.stackblitz.com',
        urlTitle: 'Example',
        urlSource: 'https://stackblitz.com/edit/fork-ex',
        urlSourceTitle: 'Source'
      },
      {
        name: 'JavaScript Array reduce() Method',
        describle: 'example filter by use reduce function',
        image: '//placehold.it/100',
        url: 'https://example-filter-reduce.stackblitz.io',
        urlTitle: 'Example',
        urlSource: 'https://stackblitz.com/edit/example-filter-reduce',
        urlSourceTitle: 'Source'
      },
      {
        name: 'TypeScript Set',
        describle: 'example filter by use reduce function and Set interface',
        image: '//placehold.it/100',
        url: 'https://filter-reduce-set.stackblitz.io',
        urlTitle: 'Example',
        urlSource: 'https://stackblitz.com/edit/filter-reduce-set',
        urlSourceTitle: 'Source'
      },
      {
        name: 'DropDown Profile',
        describle: 'example profile of user use ng-bootstrap dropdown',
        image: '//placehold.it/100',
        url: 'https://dropdown-profile.stackblitz.io',
        urlTitle: 'Example',
        urlSource: 'https://stackblitz.com/edit/dropdown-profile',
        urlSourceTitle: 'Source'
      },
      {
        name: 'Overlap table',
        describle: 'example overlap table',
        image: '//placehold.it/100',
        url: 'https://overlap-table-ex.stackblitz.io',
        urlTitle: 'Example',
        urlSource: 'https://stackblitz.com/edit/overlap-table-ex',
        urlSourceTitle: 'Source'
      },
      {
        name: 'Image cropper for Angular',
        describle: 'example of image cropper for Angular',
        image: '//placehold.it/100',
        url: 'https://ngx-image-cropper.stackblitz.io',
        urlTitle: 'Example',
        urlSource: 'https://stackblitz.com/edit/ngx-image-cropper',
        urlSourceTitle: 'Source'
      }
    ];
    return of(examples);
  }

}