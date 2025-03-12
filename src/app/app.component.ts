import { Component, OnInit, HostListener, effect, inject, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService, MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ImportsModule } from '../app/imports';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
//import { Tour } from './domain/tour';
import { TourService } from './services/tour.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { environment } from '../environments/environment';
import { Tour } from './domain/tour.model';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImportsModule,ListComponent, MapComponent, TableComponent, MatSlideToggleModule, MatProgressSpinner],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, MegaMenu]
})
export class AppComponent implements OnInit {
  //tours: Tour[] = [];
  items: MegaMenuItem[] | undefined;
  screenWidth: number;
  loading: boolean = false;
  error: string | null = null;

  env = environment;

  search = signal<string>('');

  tours = resource<Tour[], {search:string}>({
    request: () => ({
      search: this.search()
    }),
    loader: async ({request, abortSignal}) => {
      const response = await
        fetch(`${this.env.apiRoot}/otherusercase/path?query=${request.search}&courseId=18`,
          {
            signal: abortSignal
          });
      const json = await response.json();
      return json.tours;
    }
  });


  constructor(private messageService: MessageService, private tourService: TourService) {
    this.screenWidth = window.innerWidth;
    //this.tours = this.tourService.getTours();
    effect(() => {
      console.log('searching tours:', this.search() );
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }


  searchTours(search: string) {
    this.search.set(search);
  }

  reset() {

  }

  reload() {

  }

  ngOnInit() {
    this.loadTours();
    this.items = [
      {
        label: 'Europa',
        icon: 'pi pi-fw pi-globe',
        items: [
          [
            {
              label: 'Europa Occidental',
              items: [
                { label: 'Francia' },
                { label: 'Alemania' },
                { label: 'Países Bajos' },
                { label: 'Bélgica' }
              ]
            }
          ],
          [
            {
              label: 'Europa del Sur',
              items: [
                { label: 'España' },
                { label: 'Italia' },
                { label: 'Grecia' },
                { label: 'Portugal' }
              ]
            }
          ],
          [
            {
              label: 'Europa del Este',
              items: [
                { label: 'Polonia' },
                { label: 'República Checa' },
                { label: 'Hungría' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Asia',
        icon: 'pi pi-fw pi-compass',
        items: [
          [
            {
              label: 'Asia Oriental',
              items: [
                { label: 'Japón' },
                { label: 'China' },
                { label: 'Corea del Sur' }
              ]
            }
          ],
          [
            {
              label: 'Sudeste Asiático',
              items: [
                { label: 'Tailandia' },
                { label: 'Vietnam' },
                { label: 'Indonesia' }
              ]
            }
          ]
        ]
      },
      {
        label: 'América',
        icon: 'pi pi-fw pi-map',
        items: [
          [
            {
              label: 'Norteamérica',
              items: [
                { label: 'Canadá' },
                { label: 'Estados Unidos' },
                { label: 'México' }
              ]
            }
          ],
          [
            {
              label: 'Sudamérica',
              items: [
                { label: 'Brasil' },
                { label: 'Argentina' },
                { label: 'Chile' }
              ]
            }
          ]
        ]
      },
      {
        label: 'África',
        icon: 'pi pi-fw pi-sun',
        items: [
          [
            {
              label: 'Norte de África',
              items: [
                { label: 'Marruecos' },
                { label: 'Egipto' },
                { label: 'Túnez' }
              ]
            }
          ],
          [
            {
              label: 'África Subsahariana',
              items: [
                { label: 'Kenia' },
                { label: 'Tanzania' },
                { label: 'Sudáfrica' }
              ]
            }
          ]
        ]
      }
    ];
  }
  loadTours() {
    this.loading = true;
    this.error = null;
    /* this.tourService.getTours().subscribe(
    {
      next: (response) => {
        this.tours = response.data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      }
    }
    ); */
  }
    show() {
        this.messageService.add({ 
          severity: 'info', 
          summary: 'Info', 
          detail: 'Message Content', 
          life: 3000 });MatSlideToggleModule
    }
}
