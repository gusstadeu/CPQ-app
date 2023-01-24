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
import 'ojs/ojinputnumber';
import "ojs/ojcheckboxset";

class ThirdViewModel {


    private bottomOpened = ko.observable(false);
    bottomToggle = (): void => this.bottomOpened(!this.bottomOpened());
  
    constructor() {
  
    }
  
  }
  
  export = ThirdViewModel;
  