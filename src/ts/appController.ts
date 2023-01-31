import * as ko from "knockout";
import * as ModuleUtils from "ojs/ojmodule-element-utils";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import CoreRouter = require ("ojs/ojcorerouter");
import ModuleRouterAdapter = require("ojs/ojmodulerouter-adapter");
import KnockoutRouterAdapter = require("ojs/ojknockoutrouteradapter");
import UrlParamAdapter = require("ojs/ojurlparamadapter");
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojknockout";
import "ojs/ojmodule-element";
import { ojNavigationList } from "ojs/ojnavigationlist";
import { ojModule } from "ojs/ojmodule-element";
import Context = require("ojs/ojcontext");
import "ojs/ojdrawerpopup";
import { whenDocumentReady } from "ojs/ojbootstrap";
import "ojs/ojinputtext";
import Color = require("@oracle/oraclejet/dist/types/ojcolor");



interface CoreRouterDetail {
  detail?: object;
  label?: string;
  iconClass?: string;
  title?: string;
};

class RootViewModel {
  manner: ko.Observable<string>;
  message: ko.Observable<string|undefined>;
  smScreen: ko.Observable<boolean>;
  mdScreen: ko.Observable<boolean>;
  router: CoreRouter<CoreRouterDetail>;
  moduleAdapter: ModuleRouterAdapter<CoreRouterDetail>;
  sideDrawerOn: ko.Observable<boolean>;
  navDataProvider: ojNavigationList<string, CoreRouter.CoreRouterState<CoreRouterDetail>>["data"];
  navDataHeader: ojNavigationList<string, CoreRouter.CoreRouterState<CoreRouterDetail>>["as"];

  appName: ko.Observable<string>;
  userLogin: ko.Observable<string>;
  footerLinks: Array<object>;
  selection: KnockoutRouterAdapter<CoreRouterDetail>;

  constructor() {
    // handle announcements sent when pages change, for Accessibility.
    this.manner = ko.observable("polite");
    this.message = ko.observable();

    let globalBodyElement: HTMLElement = document.getElementById("globalBody") as HTMLElement;
    globalBodyElement.addEventListener("announce", this.announcementHandler, false);

    // media queries for repsonsive layouts
    let smQuery: string | null = ResponsiveUtils.getFrameworkQuery("sm-only");
    if (smQuery){
      this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
    }
    
    let mdQuery: string | null = ResponsiveUtils.getFrameworkQuery("md-up");
    if (mdQuery){
      this.mdScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
    }

    const navData = [
      { path: "", redirect: "cotacao" },
      { path: "home", detail: { label: "Home", title: 'Oswaldo Cruz Química',color:'green', iconClass: "oj-ux-ico-home" } },
      { path: "contas", detail: { label: "Contas", title: 'contas', iconClass: "oj-ux-ico-building" } },
      { path: "cotacao", detail: { label: "Cotação", title: 'Relatório de cotação', iconClass: "oj-ux-ico-artifact-audit-file" } },
      { path: "perfil", detail: { label: "Perfil", title: 'perfil', iconClass: "oj-ux-ico-avatar" } },
      { path: "ajuda", detail: { label: "Ajuda", title: 'ajuda', iconClass: "oj-ux-ico-help-circle-s" } },
      {path: 'quotes', detail:  { label: undefined, title: 'Cotação', iconClass: undefined } }
    ];

    // router setup
    const router = new CoreRouter(navData, {
      urlAdapter: new UrlParamAdapter()
    });
    router.sync();

    this.moduleAdapter = new ModuleRouterAdapter(router);

    this.selection = new KnockoutRouterAdapter(router);

    // Setup the navDataProvider with the routes, excluding the first redirected
    // route.
    this.navDataProvider = new ArrayDataProvider(navData.slice(1), {keyAttributes: "path"});


    // drawer
    this.sideDrawerOn = ko.observable(false);


    // application Name used in Branding Area
    this.appName = ko.observable("");
    // user Info used in Global Navigation area

    this.userLogin = ko.observable("john.hancock@oracle.com");
    // footer

    // release the application bootstrap busy state
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();        
  }

  announcementHandler = (event: any): void => {
      this.message(event.detail.message);
      this.manner(event.detail.manner);
  }

  // called by navigation drawer toggle button and after selection of nav drawer item
  toggleDrawer = (): void => {
    this.sideDrawerOn(!this.sideDrawerOn());
  }

    // a close listener so we can move focus back to the toggle button when the drawer closes
    openedChangedHandler = (event: CustomEvent): void => {
    if (event.detail.value === false) {
      const drawerToggleButtonElement = document.querySelector("#drawerToggleButton") as HTMLElement;
      drawerToggleButtonElement.focus();
    }
  };
}

export default new RootViewModel();
