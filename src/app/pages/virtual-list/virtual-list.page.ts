import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { ItemPhoto } from 'src/app/core/models/itemPhoto/Item.photo.model';
import { PhotoListApiService } from 'src/app/core/services/photoList/api/photo.list.api.service';
import { Const } from 'src/app/core/config/const/const';

@Component({
  selector: 'app-virtual-list',
  templateUrl: './virtual-list.page.html',
  styleUrls: ['./virtual-list.page.scss'],
})
export class VirtualListPage implements OnInit {

  // Variable para almacenar los elementos a mostrar por pantalla
  public dataList = new Array<ItemPhoto>();

  // Variable para almacenar el ID que se desea buscar
  public searchId: number;

  // Variable para controlar si traemos todos los datos
  public blAll = false;

  // Variable para almacenar el Texto que se desea buscar
  public searchText: string;

  // Control de la pagina en la que nos encontramos cuando NO cargamos todos los datos
  private currentPage = 1;

  // Control de elementos cargados por pagina. Sería facilmente parametrizable
  private currentCount = 20;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  constructor(private service: PhotoListApiService) { }

  ngOnInit(){
    // Inicializamos los elementos que se mostraran al comienzo
    this.service.get(this.currentPage, this.currentCount).subscribe(
      (values: Array<ItemPhoto>)=>{
        values.forEach((value)=>{
          this.dataList.push(value);
        });
      });
  }

  // Funcion que carga los elementos de la lista por paginación controlando el scroll de la pagina
  public loadData(event): void {
    this.currentPage++;
    this.service.get(this.currentPage, this.currentCount).subscribe(
      (values: Array<ItemPhoto>)=>{
        values.forEach(
          (value)=>{
            this.dataList.push(value);
          }
        );
        
        // Ocultar loading de lista infinita al completar
        event.target.complete();

        //Volver a mostrar la lista de Virtual Scroll después de agregar nuevos datos
        this.virtualScroll.checkEnd();

        // Lógica de la aplicación para determinar si todos los datos están cargados
        // y deshabilitar el desplazamiento infinito
        if (this.dataList.length === Const.maxElement) {
          event.target.disabled = true;
        }
    }
  );
  }

  // Método que se lanza al cambiar el valos de blAll.
  // Según su valor carga el contenido de todos los elementos o carga los elementos según paginación
  public ngCheckOnChange(): void{
    if(this.blAll){
      this.dataList = [];
      
      this.service.getAll().subscribe(
        (values: Array<ItemPhoto>)=>{
          values.forEach((value)=>{
            this.dataList.push(value);
          });
          this.toggleInfiniteScroll();
        });
    }
    else{
      this.dataList = [];
      this.currentPage = Const.page;
      this.currentCount = Const.count;
      this.service.get(this.currentPage, this.currentCount).subscribe(
        (values: Array<ItemPhoto>)=>{
          values.forEach((value)=>{
            this.dataList.push(value);
          });
          this.toggleInfiniteScroll();
        });
    }
  }

  private toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
