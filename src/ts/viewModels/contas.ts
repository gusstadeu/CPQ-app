import * as AccUtils from "../accUtils";

import { whenDocumentReady } from 'ojs/ojbootstrap';
import * as ko from 'knockout';
import 'ojs/ojknockout';
import 'ojs/ojdrawerpopup';
import 'ojs/ojbutton'; // Controls
import 'ojs/ojnavigationlist'; // Start drawer
// End drawer
import 'ojs/ojformlayout';
import 'ojs/ojinputtext';
import 'ojs/ojinputnumber';

  // Modules
  import 'ojs/ojdrawerlayout';
  // Controls
  import 'ojs/ojbutton';
  // Drawers
  import 'ojs/ojnavigationlist';

  import 'ojs/ojconveyorbelt';
  import 'ojs/ojactioncard';
  import 'ojs/ojavatar';
  
  interface UserModel {
    id: number;
    name: string;
    qtd: number,
    desc: number,
    vl_desc: number,
    preco: number
  }

class ContasViewModel {

  readonly users: UserModel[] = [
    {
      id: 1,
      name: 'Plástico',
      qtd: 15,
      desc: 2,
      vl_desc: 350,
      preco: 5000
    },
    {
      id: 2,
      name: 'Papel',
      qtd: 25,
      desc: 5,
      vl_desc: 450,
      preco: 7000
    },
    {
      id: 3,
      name: 'Algodão 100%',
      qtd: 45,
      desc: 7,
      vl_desc: 750,
      preco: 1000
    },
    {
      id: 4,
      name: 'Nanofibra',
      qtd: 55,
      desc: 2,
      vl_desc: 650,
      preco: 9000
    },
    {
      id: 5,
      name: 'Nylon',
      qtd: 100,
      desc: 6,
      vl_desc: 50,
      preco: 500
    }
  ];

  private startOpened = ko.observable(false);
  startToggle = (): void => this.startOpened(!this.startOpened());
  constructor() {

  }

  transitionCompleted(): void {
    // implement if needed
  }
}

export = ContasViewModel;
