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
    image: string;
  }


class OneViewModel {

    readonly users: UserModel[] = [
        {
          id: 1,
          name: 'Plástico',
          image: 'https://picsum.photos/600/400',

        },
        {
          id: 2,
          name: 'Cola',
          image: 'https://picsum.photos/600/400',
        },
        {
          id: 3,
          name: 'Papel',
          image: 'https://picsum.photos/600/400',
        },
        {
          id: 4,
          name: 'Couro',
          image: 'https://picsum.photos/600/400',
        },

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
  
export = OneViewModel;
  