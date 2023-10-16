export const environment = {
    production: true,
    userStorage: 'currentUser',
    tokenStorage: 'token',
    version: '1.0', //Version actual del aplicativo que se esta desarrollando
    titleApp: 'SEG', //Titulo que va a tener la aplicacion en los navegadores web
    homePage: '/home', //Pagina de Inicio
    showHeader: true, //Mostrar header
    showMenu: true, //Mostrar Menu
    showFooter: true, //Mostrar footer
    apiSecurity: location.protocol + '//jrromero23/',
    apiAuth: location.protocol + '//localhost:1337',
    apidummy: 'http://localhost:3001',
    api: location.protocol + '//localhost/SEG.Procesos',
    // dominioApi: 'http://localhost:8037',
    dominioApi: 'https://admdominioapi.azurewebsites.net',
    posiCatApi: location.protocol + '//localhost/SEG.Procesos',
    usuarioApi: location.protocol + '//localhost/SEG.Procesos',
    apiSeg: location.protocol + '//localhost/SEG.Procesos',
    apiDominio: 'https://admdominioapi.azurewebsites.net',
    urlReportes: 'http://ssrsmh.eastus.cloudapp.azure.com/ReportServer/Pages/ReportViewer.aspx?',
    pathReportesSeg: '%2fSEG%2f',
    apiBonos: 'https://transserviciosexternos.azurewebsites.net',
    /** Filtros Genéricos */
    apiAdmProcesos: 'https://admprocesosapi.azurewebsites.net/api/',
    apiAdmDominio: 'https://admdominioapi.azurewebsites.net/api',
    apiSegProcesos: 'https://segprocesosapi.azurewebsites.net/api',
    apiTransFiltros: 'https://transfiltrosgenericos.azurewebsites.net/api',
  };
  