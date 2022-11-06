import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CofeeListComponent } from './cofee-list.component';
import { CofeeService } from 'src/app/core/services/cofee.service';
import { Cofee } from 'src/app/core/interface/cofee.interface';

describe('CofeeListComponent', () => {
  let component: CofeeListComponent;
  let fixture: ComponentFixture<CofeeListComponent>;

  const COFFEE_MOCK: Cofee[] = [
    {
        "id": 4,
        "nombre": "Café Especial Valentina",
        "tipo": "Café de Origen",
        "region": "Fredonia, Antioquia",
        "sabor": "Chocolate, Cáscara de limón, Nuez",
        "altura": 1700,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-valentina-cafe-colombiano_1_720x.jpg"
    },
    {
        "id": 5,
        "nombre": "Café Especial Sombrero Vueltiao",
        "tipo": "Café de Origen",
        "region": "Amagá, Antioquia",
        "sabor": "Chocolate, Frutos secos, Frutos rojos, Caña de azúcar",
        "altura": 1450,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-sombrero-vueltiao-2-cafe-colombiano-f_720x.png"
    },
    {
        "id": 6,
        "nombre": "Café Especial La Manchuria",
        "tipo": "Blend",
        "region": "Salgar, Antioquia",
        "sabor": "Vino, Notas dulces, Frutos rojos",
        "altura": 1850,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CofeeListComponent],
      providers: [
        {
          provide: CofeeService,
          userValue: {
            getCofees() { return COFFEE_MOCK; }
          }
        }
      ],
      schemas : [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofeeListComponent);
    component = fixture.componentInstance;

    component.coofes = COFFEE_MOCK;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list coffes', () => {
    const fixture = TestBed.createComponent(CofeeListComponent);
    component = fixture.componentInstance;
    component.coofes = COFFEE_MOCK;

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const htmlElement = compiled.querySelector('.table')?.innerHTML;

    //Contiene el titulo
    expect(htmlElement).toContain('#');

    //Probar los cafes del mock
    COFFEE_MOCK.forEach( (element, index) => {
      expect(htmlElement).toContain(index+1);
      expect(htmlElement).toContain(element.nombre);
    });
  })

});
