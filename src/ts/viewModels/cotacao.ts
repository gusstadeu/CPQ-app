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
  

import * as ModuleElementUtils from "ojs/ojmodule-element-utils";
import "ojs/ojmodule-element";
import * as Bootstrap from "ojs/ojbootstrap";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojswitch";
import "ojs/ojradioset";

  
  interface UserModel {
    id: number;
    name: string;
    status: string,
    por: string,
    v_total: number,
    versao: number
  }

class CotacaoViewModel {

  readonly users: UserModel[] = [
    {
      id: 1,
      name: 'CPQ-223',
      status: 'criada',
      por: 'Rodrigo Geraldes',
      v_total: 350,
      versao: 1
    },
    {
      id: 2,
      name: 'CPQ-222',
      status: 'criada',
      por: 'Rodrigo Geraldes',
      v_total: 450,
      versao:3
    },
    {
      id: 3,
      name: 'CPQ-221',
      status: 'criada',
      por: 'Rodrigo Geraldes',
      v_total: 750,
      versao: 1
    },
    {
      id: 4,
      name: 'CPQ-220',
      status: 'criada',
      por: 'Rodrigo Geraldes',
      v_total: 650,
      versao: 2
    },
    {
      id: 5,
      name: 'CPQ-219',
      status: 'criada',
      por: 'Rodrigo Geraldes',
      v_total: 50,
      versao: 1
    }
  ];

  private startOpened = ko.observable(false);
  startToggle = (): void => this.startOpened(!this.startOpened());
  
  public currentModule: ko.Observable<string> = ko.observable("first");
  public ModuleElementUtils = ModuleElementUtils;
  
    constructor() {  

    }

  transitionCompleted(): void {
    // implement if needed
  }

}

export = CotacaoViewModel;
