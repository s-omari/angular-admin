import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }



  getData() {
    return this.data;
  }

  
  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: 28,
    active: true
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: 45,
    active: true
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: 18,
    active: true
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    username: '@snow',
    email: 'snow@gmail.com',
    age: 20,
    active: true
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: 30,
    active: true
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    username: '@ann',
    email: 'ann@gmail.com',
    age: 21,
    active: true
  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    username: '@barbara',
    email: 'barbara@yandex.ru',
    age: 43,
    active: true
  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    username: '@sevan',
    email: 'sevan@outlook.com',
    age: 13,
    active: false
  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    username: '@ruben',
    email: 'ruben@gmail.com',
    age: 22,
    active: false
  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    username: '@karen',
    email: 'karen@yandex.ru',
    age: 33,
    active: false
  }, {
    id: 11,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mark',
    email: 'mark@gmail.com',
    age: 38,
    active: false
  }, {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@jacob',
    email: 'jacob@yandex.ru',
    age: 48,
    active: false
  }, {
    id: 13,
    firstName: 'Haik',
    lastName: 'Hakob',
    username: '@haik',
    email: 'haik@outlook.com',
    age: 48,
    active: false
  }, {
    id: 14,
    firstName: 'Garegin',
    lastName: 'Jirair',
    username: '@garegin',
    email: 'garegin@gmail.com',
    age: 40,
    active: false
  }, {
    id: 15,
    firstName: 'Krikor',
    lastName: 'Bedros',
    username: '@krikor',
    email: 'krikor@yandex.ru',
    age: 32,
    active: false
  }, {
    'id': 16,
    'firstName': 'Francisca',
    'lastName': 'Brady',
    'username': '@Gibson',
    'email': 'franciscagibson@comtours.com',
    'age': 1,
  active: false  }, {
    'id': 17,
    'firstName': 'Tillman',
    'lastName': 'Figueroa',
    'username': '@Snow',
    'email': 'tillmansnow@comtours.com',
    'age': 3,
  active: false  }, {
    'id': 18,
    'firstName': 'Jimenez',
    'lastName': 'Morris',
    'username': '@Bryant',
    'email': 'jimenezbryant@comtours.com',
    'age': 4,
  active: false  }, {
    'id': 19,
    'firstName': 'Sandoval',
    'lastName': 'Jacobson',
    'username': '@Mcbride',
    'email': 'sandovalmcbride@comtours.com',
    'age': 3,
  active: false  }, {
    'id': 20,
    'firstName': 'Griffin',
    'lastName': 'Torres',
    'username': '@Charles',
    'email': 'griffincharles@comtours.com',
    'age': 1,
  active: false  }, {
    'id': 21,
    'firstName': 'Cora',
    'lastName': 'Parker',
    'username': '@Caldwell',
    'email': 'coracaldwell@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 22,
    'firstName': 'Cindy',
    'lastName': 'Bond',
    'username': '@Velez',
    'email': 'cindyvelez@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 23,
    'firstName': 'Frieda',
    'lastName': 'Tyson',
    'username': '@Craig',
    'email': 'friedacraig@comtours.com',
    'age': 4,
  active: true  }, {
    'id': 24,
    'firstName': 'Cote',
    'lastName': 'Holcomb',
    'username': '@Rowe',
    'email': 'coterowe@comtours.com',
    'age': 2,
  active: true  }, {
    'id': 25,
    'firstName': 'Trujillo',
    'lastName': 'Mejia',
    'username': '@Valenzuela',
    'email': 'trujillovalenzuela@comtours.com',
    'age': 1,
  active: true  }, {
    'id': 26,
    'firstName': 'Pruitt',
    'lastName': 'Shepard',
    'username': '@Sloan',
    'email': 'pruittsloan@comtours.com',
    'age': 4,
  active: true  }, {
    'id': 27,
    'firstName': 'Sutton',
    'lastName': 'Ortega',
    'username': '@Black',
    'email': 'suttonblack@comtours.com',
    'age': 4,
  active: false  }, {
    'id': 28,
    'firstName': 'Marion',
    'lastName': 'Heath',
    'username': '@Espinoza',
    'email': 'marionespinoza@comtours.com',
    'age': 4,
  active: false  }, {
    'id': 29,
    'firstName': 'Newman',
    'lastName': 'Hicks',
    'username': '@Keith',
    'email': 'newmankeith@comtours.com',
    'age': 1,
  active: false  }, {
    'id': 30,
    'firstName': 'Boyle',
    'lastName': 'Larson',
    'username': '@Summers',
    'email': 'boylesummers@comtours.com',
    'age': 3,
  active: false  }, {
    'id': 31,
    'firstName': 'Haynes',
    'lastName': 'Vinson',
    'username': '@Mckenzie',
    'email': 'haynesmckenzie@comtours.com',
    'age': 1,
  active: false  }, {
    'id': 32,
    'firstName': 'Miller',
    'lastName': 'Acosta',
    'username': '@Young',
    'email': 'milleryoung@comtours.com',
    'age': 5,
  active: false  }, {
    'id': 33,
    'firstName': 'Johnston',
    'lastName': 'Brown',
    'username': '@Knight',
    'email': 'johnstonknight@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 34,
    'firstName': 'Lena',
    'lastName': 'Pitts',
    'username': '@Forbes',
    'email': 'lenaforbes@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 35,
    'firstName': 'Terrie',
    'lastName': 'Kennedy',
    'username': '@Branch',
    'email': 'terriebranch@comtours.com',
    'age': 3,
  active: false  }, {
    'id': 36,
    'firstName': 'Louise',
    'lastName': 'Aguirre',
    'username': '@Kirby',
    'email': 'louisekirby@comtours.com',
    'age': 4,
  active: false  }, {
    'id': 37,
    'firstName': 'David',
    'lastName': 'Patton',
    'username': '@Sanders',
    'email': 'davidsanders@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 38,
    'firstName': 'Holden',
    'lastName': 'Barlow',
    'username': '@Mckinney',
    'email': 'holdenmckinney@comtours.com',
    'age': 1,
  active: false  }, {
    'id': 39,
    'firstName': 'Baker',
    'lastName': 'Rivera',
    'username': '@Montoya',
    'email': 'bakermontoya@comtours.com',
    'age': 4,
  active: false  }, {
    'id': 40,
    'firstName': 'Belinda',
    'lastName': 'Lloyd',
    'username': '@Calderon',
    'email': 'belindacalderon@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 41,
    'firstName': 'Pearson',
    'lastName': 'Patrick',
    'username': '@Clements',
    'email': 'pearsonclements@comtours.com',
    'age': 4,
  active: false  }, {
    'id': 42,
    'firstName': 'Alyce',
    'lastName': 'Mckee',
    'username': '@Daugherty',
    'email': 'alycedaugherty@comtours.com',
    'age': 5,
  active: false  }, {
    'id': 43,
    'firstName': 'Valencia',
    'lastName': 'Spence',
    'username': '@Olsen',
    'email': 'valenciaolsen@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 44,
    'firstName': 'Leach',
    'lastName': 'Holcomb',
    'username': '@Humphrey',
    'email': 'leachhumphrey@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 45,
    'firstName': 'Moss',
    'lastName': 'Baxter',
    'username': '@Fitzpatrick',
    'email': 'mossfitzpatrick@comtours.com',
    'age': 5,
  active: false  }, {
    'id': 46,
    'firstName': 'Jeanne',
    'lastName': 'Cooke',
    'username': '@Ward',
    'email': 'jeanneward@comtours.com',
    'age': 5,
  active: false  }, {
    'id': 47,
    'firstName': 'Wilma',
    'lastName': 'Briggs',
    'username': '@Kidd',
    'email': 'wilmakidd@comtours.com',
    'age': 5,
  active: false  }, {
    'id': 48,
    'firstName': 'Beatrice',
    'lastName': 'Perry',
    'username': '@Gilbert',
    'email': 'beatricegilbert@comtours.com',
    'age': 3,
  active: false  }, {
    'id': 49,
    'firstName': 'Whitaker',
    'lastName': 'Hyde',
    'username': '@Mcdonald',
    'email': 'whitakermcdonald@comtours.com',
    'age': 3,
  active: false  }, {
    'id': 50,
    'firstName': 'Rebekah',
    'lastName': 'Duran',
    'username': '@Gross',
    'email': 'rebekahgross@comtours.com',
    'age': 4,
  active: false  }, {
    'id': 51,
    'firstName': 'Earline',
    'lastName': 'Mayer',
    'username': '@Woodward',
    'email': 'earlinewoodward@comtours.com',
    'age': 5,
  active: false  }, {
    'id': 52,
    'firstName': 'Moran',
    'lastName': 'Baxter',
    'username': '@Johns',
    'email': 'moranjohns@comtours.com',
    'age': 2,
  active: false  
}, {
    'id': 53,
    'firstName': 'Nanette',
    'lastName': 'Hubbard',
    'username': '@Cooke',
    'email': 'nanettecooke@comtours.com',
    'age': 5,
  active: false  
}, {
    'id': 54,
    'firstName': 'Dalton',
    'lastName': 'Walker',
    'username': '@Hendricks',
    'email': 'daltonhendricks@comtours.com',
    'age': 2,
  active: false  }, {
    'id': 55,
    'firstName': 'Bennett',
    'lastName': 'Blake',
    'username': '@Pena',
    'email': 'bennettpena@comtours.com',
    'age': 1,
  active: true  }, {
    'id': 56,
    'firstName': 'Kellie',
    'lastName': 'Horton',
    'username': '@Weiss',
    'email': 'kellieweiss@comtours.com',
    'age': 4,
  active: true  }, {
    'id': 57,
    'firstName': 'Hobbs',
    'lastName': 'Talley',
    'username': '@Sanford',
    'email': 'hobbssanford@comtours.com',
    'age': 2,
  active: true  }, {
    'id': 58,
    'firstName': 'Mcguire',
    'lastName': 'Donaldson',
    'username': '@Roman',
    'email': 'mcguireroman@comtours.com',
    'age': 3,
  active: true  }, {
    'id': 59,
    'firstName': 'Rodriquez',
    'lastName': 'Saunders',
    'username': '@Harper',
    'email': 'rodriquezharper@comtours.com',
    'age': 2,
  active: true  }, {
    'id': 60,
    'firstName': 'Lou',
    'lastName': 'Conner',
    'username': '@Sanchez',
    'email': 'lousanchez@comtours.com',
    'age': 1,
  active: true  }
  ];




}
