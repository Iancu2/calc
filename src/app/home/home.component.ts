import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageObject = [{
    image: "https://www.pchouse.ro/media/catalog/category/resized/200x200/calculatoare-noi-ver2.png",
    thumbImage: "https://www.pchouse.ro/media/catalog/category/resized/200x200/calculatoare-noi-ver2.png",
   
}, {
    image: 'https://produsebune.ro/wp-content/uploads/2020/12/Top-Calculatoare-Desktop-PC-300x300.png',
    thumbImage: 'https://produsebune.ro/wp-content/uploads/2020/12/Top-Calculatoare-Desktop-PC-300x300.png'
}, {
    image: 'https://s1.cel.ro/images/mari/2021/01/07/calculator-i5-3470-1tb-hdd-8gb-ram-sky-03i5.jpg',
    thumbImage: 'https://s1.cel.ro/images/mari/2021/01/07/calculator-i5-3470-1tb-hdd-8gb-ram-sky-03i5.jpg',
},
{
  image: 'https://ge-fors.ro/wp-content/uploads/7314317-less-1-300x300.jpg',
  thumbImage: 'https://ge-fors.ro/wp-content/uploads/7314317-less-1-300x300.jpg',
},
{
  image: 'https://s13emagst.akamaized.net/products/15501/15500817/images/res_e6ad0fd6bc22d03895071ce2dd198cc5.jpg',
  thumbImage: 'https://s13emagst.akamaized.net/products/15501/15500817/images/res_e6ad0fd6bc22d03895071ce2dd198cc5.jpg',
},
{
  image: 'https://s13emagst.akamaized.net/products/41272/41271129/images/res_c58170b720109e43e0af31215a15c0d2.jpg',
  thumbImage: 'https://s13emagst.akamaized.net/products/41272/41271129/images/res_c58170b720109e43e0af31215a15c0d2.jpg',
}

];
  constructor() { }

  ngOnInit(): void {
  }

 
}
