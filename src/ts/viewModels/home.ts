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

import { ojConveyorBelt } from "ojs/ojconveyorbelt";
import "ojs/ojselectsingle";
import "ojs/ojformlayout";


class HomeViewModel {
  currentModule: ko.Observable<string>
  public ModuleElementUtils = ModuleElementUtils;
  data: ko.ObservableArray;
  dataProvider: ArrayDataProvider<string, string>;
  tabsDP: ArrayDataProvider<string, string>;
  selectedItem: ko.Observable<string>;
  currentItem: ko.Observable<string | undefined>;
  edge: ko.Observable<string>;
  onSelectionChanged: (event: CustomEvent) => void;

  constructor() {

    this.currentModule = ko.observable("one");

    this.data = ko.observableArray([
      {
        id: "sv1",
        value: "one",
        name: "one",
      },
      {
        id: "sv2",
        value: "two",
        name: "two",
      },
      {
        id: "sv3",
        value: "third",
        name: "third",
      },
      {
        id: "sv4",
        value: "four",
        name: "four",
      },
      {
        id: "sv5",
        value: "five",
        name: "five",
      },
      {
        id: "sv6",
        value: "six",
        name: "six",
      },
      {
        id: "sv7",
        value: "seven",
        name: "seven",
      },

    ]);
    this.dataProvider = new ArrayDataProvider(this.data, {
      keyAttributes: "id",
    });

    this.tabsDP = new ArrayDataProvider(this.data, { keyAttributes: "value" });
    this.selectedItem = ko.observable("one");
    console.log( this.selectedItem())
    this.currentItem = ko.observable();    

    this.onSelectionChanged = (event: CustomEvent) => {
      const conveyorBelt = document.getElementById(
        "my-conveyor-belt"
      ) as ojConveyorBelt;
      conveyorBelt.scrollElementIntoView(event.detail.item);
    };
  }

}

export = HomeViewModel;
