import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import { whenDocumentReady } from "ojs/ojbootstrap";
import * as ModuleElementUtils from "ojs/ojmodule-element-utils";
import "ojs/ojmodule-element";
import "ojs/ojknockout";
import "ojs/ojbutton";
import * as Bootstrap from "ojs/ojbootstrap";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojknockout";
import "ojs/ojnavigationlist";
import "ojs/ojswitch";
import "ojs/ojradioset";
import 'ojs/ojconveyorbelt';
import 'ojs/ojbutton';

class QuotesViewModel {
  currentModule: ko.Observable<string>;
  public ModuleElementUtils = ModuleElementUtils; 
  
  constructor() {  
    this.currentModule = ko.observable("first");

    }

}

export = QuotesViewModel;
