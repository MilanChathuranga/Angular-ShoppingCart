import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  baseUrl = "https://localhost:5001/api/"
  private http = inject(HttpClient);
  title = 'Skinet';
  products: any[] = [];

  ngOnInit(): void {
    // this.http.get<any>(this.baseUrl + 'products').subscribe({
    //   next: response => this.products = response.data,
    //   error: error => console.log(error)

    // })
    this.products = [
      {
          name: 'Wireless Headphones',
          description: 'Experience immersive sound with these wireless headphones, featuring noise-cancellation technology and a comfortable fit for long listening sessions.',
          price: 19.99,
          pictureUrl: '/images/products/sb-ang1.png',
          type: 'Electronics',
          brand: 'SoundTech',
          quantityInStock: 100
      },
      {
          name: 'Stylish T-Shirt',
          description: 'A trendy t-shirt made from soft, breathable fabric, perfect for casual outings or lounging at home.',
          price: 29.99,
          pictureUrl: '/images/products/sb-ang2.png',
          type: 'Clothing',
          brand: 'Fashionista',
          quantityInStock: 200
      },
      {
          name: 'Skateboard Grip Tape',
          description: 'Durable grip tape designed for skateboard decks, ensuring maximum traction for better control during rides.',
          price: 9.99,
          pictureUrl: '/images/products/sb-core1.png',
          type: 'Accessories',
          brand: 'GripMaster',
          quantityInStock: 150
      },
      {
          name: 'Graphic Hoodie',
          description: 'Stay cozy and stylish with this graphic hoodie, featuring a unique design and a soft, warm interior.',
          price: 29.99,
          pictureUrl: '/images/products/sb-core2.png',
          type: 'Clothing',
          brand: 'TrendSetter',
          quantityInStock: 200
      },
      {
          name: 'Multifunction Skate Tool',
          description: 'A compact and versatile skate tool for adjustments on the go, featuring multiple functions for your skateboard needs.',
          price: 9.99,
          pictureUrl: '/images/products/sb-react1.png',
          type: 'Accessories',
          brand: 'SkatePro',
          quantityInStock: 150
      },
      {
          name: 'Fashionable Beanie',
          description: 'Keep warm with this stylish beanie, perfect for winter outings and available in multiple colors.',
          price: 29.99,
          pictureUrl: '/images/products/sb-ts1.png',
          type: 'Clothing',
          brand: 'CozyCaps',
          quantityInStock: 200
      },
      {
          name: 'Pro Skateboard',
          description: 'A premium skateboard built for enthusiasts, featuring a lightweight deck and high-quality wheels for optimal performance and stability during tricks and rides.',
          price: 79.99,
          pictureUrl: '/images/products/sb-core2.png',
          type: 'Sporting Goods',
          brand: 'SkateBrand',
          quantityInStock: 50
      },
      {
          name: 'All-Weather Winter Boots',
          description: 'These all-weather winter boots offer both style and function, designed with insulation and waterproof technology to keep your feet warm and dry in any winter condition.',
          price: 89.99,
          pictureUrl: '/images/products/boot-ang2.png',
          type: 'Footwear',
          brand: 'BootBrand',
          quantityInStock: 30
      },
      {
          name: 'Durable Skate Shoes',
          description: 'These skate shoes combine comfort and style, designed for skaters looking for performance on and off the board.',
          price: 69.99,
          pictureUrl: '/images/products/boot-ang1.png',
          type: 'Footwear',
          brand: 'SkateWear',
          quantityInStock: 150
      }
  ];
  
  }
}
