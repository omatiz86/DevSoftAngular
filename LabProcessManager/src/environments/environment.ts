export const environment = {
    production: false,
    userStorage: 'currentUser',
    tokenStorage: 'token',
    version: '1.0', //Version actual del aplicativo que se esta desarrollando
    titleApp: 'SEG', //Titulo que va a tener la aplicacion en los navegadores web
    homePage: '/seg/home', //Pagina de Inicio
    showHeader: true, //Mostrar header
    showMenu: true, //Mostrar Menu
    showFooter: true, //Mostrar footer
    apiSecurity: location.protocol + '//jrromero23/',
    apiAuth: location.protocol + '//localhost:1337',
    apiSeg: 'https://segprocesosapi.azurewebsites.net/api',
    apiDominio: 'https://admdominioapi.azurewebsites.net/api',
    apiBonos: 'https://transserviciosexternos.azurewebsites.net/api',
    apiAdmProcesos: 'https://admprocesosapi.azurewebsites.net/api',
    urlReportes:
      'http://ssrsmh.eastus.cloudapp.azure.com/ReportServer/Pages/ReportViewer.aspx?',
    pathReportesSeg: '%2fSEG%2f',
  
    /** Filtros Genéricos */
    //apiAdmProcesos: 'https://admprocesosapi.azurewebsites.net/api/',
    apiAdmDominio: 'https://admdominioapi.azurewebsites.net/api',
    apiSegProcesos: 'https://segprocesosapi.azurewebsites.net/api',
    apiTransFiltros: 'https://transfiltrosgenericos.azurewebsites.net/api',
  };
  