import 'ojs/ojknockout';
import 'knockout';
import 'ojs/ojbootstrap';
import 'ojs/ojknockout';
import 'ojs/ojaccordion';
import 'ojs/ojradioset';
import 'ojs/ojlabel';

import 'ojs/ojformlayout';
import 'ojs/ojselectsingle';
// Importações raw Value

import "ojs/ojknockout";
import "ojs/ojinputtext";
import "ojs/ojbutton";

import * as AccUtils from "../../accUtils";

import { whenDocumentReady } from 'ojs/ojbootstrap';
import * as ko from 'knockout';
import 'ojs/ojknockout';
import 'ojs/ojdrawerpopup';
import 'ojs/ojbutton'; // Controls
import 'ojs/ojnavigationlist'; // Start drawer
// End drawer
import 'ojs/ojformlayout';
import 'ojs/ojinputtext';

// Action Cards

import 'ojs/ojconveyorbelt';
import 'ojs/ojactioncard';
import 'ojs/ojavatar';

  // Modules
  import 'ojs/ojdrawerlayout';

  // Controls
  import 'ojs/ojbutton';
  import 'ojs/ojlabelvalue';
  import 'ojs/ojlabel';
  import "knockout";
  import "ojs/ojbootstrap";
  import "ojs/ojknockout";
  import "ojs/ojaccordion";
  
  interface UserModel {
    id: number;
    name: string;
    qtd: number,
    desc: number,
    vl_desc: number,
    preco: number
  }


class FirstViewModel {

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

    private bottomOpened = ko.observable(false);
    bottomToggle = (): void => this.bottomOpened(!this.bottomOpened());
  
    private startOpened = ko.observable(false);
    startToggle = (): void => {
      this.startOpened(!this.startOpened());
      document.getElementById('containerDrawerHeight').classList.toggle("drawerHeight-ativo");
      document.getElementById('accordionPage').classList.toggle("accordionShow");
      
    }

    constructor() {
  
    }
  
  }
  
  export = FirstViewModel;
  