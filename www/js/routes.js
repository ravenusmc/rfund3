angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.funds'
      2) Using $state.go programatically:
        $state.go('startedPage.funds');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
  */
  .state('startedPage.funds', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/funds.html',
        controller: 'fundsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/funds.html',
        controller: 'fundsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.personal'
      2) Using $state.go programatically:
        $state.go('startedPage.personal');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab2/page4
      /page1/tab3/page4
  */
  .state('startedPage.personal', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/personal.html',
        controller: 'personalCtrl'
      },
      'tab2': {
        templateUrl: 'templates/personal.html',
        controller: 'personalCtrl'
      },
      'tab3': {
        templateUrl: 'templates/personal.html',
        controller: 'personalCtrl'
      }
    }
  })

  .state('startedPage', {
    url: '/page1',
    templateUrl: 'templates/startedPage.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.fieldOfWork'
      2) Using $state.go programatically:
        $state.go('startedPage.fieldOfWork');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
  */
  .state('startedPage.fieldOfWork', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/fieldOfWork.html',
        controller: 'fieldOfWorkCtrl'
      },
      'tab2': {
        templateUrl: 'templates/fieldOfWork.html',
        controller: 'fieldOfWorkCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.health'
      2) Using $state.go programatically:
        $state.go('startedPage.health');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
  */
  .state('startedPage.health', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/health.html',
        controller: 'healthCtrl'
      },
      'tab2': {
        templateUrl: 'templates/health.html',
        controller: 'healthCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.getStarted'
      2) Using $state.go programatically:
        $state.go('startedPage.getStarted');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
      /page1/tab3/page8
  */
  .state('startedPage.getStarted', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/getStarted.html',
        controller: 'getStartedCtrl'
      },
      'tab2': {
        templateUrl: 'templates/getStarted.html',
        controller: 'getStartedCtrl'
      },
      'tab3': {
        templateUrl: 'templates/getStarted.html',
        controller: 'getStartedCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.degree'
      2) Using $state.go programatically:
        $state.go('startedPage.degree');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab2/page9
  */
  .state('startedPage.degree', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/degree.html',
        controller: 'degreeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/degree.html',
        controller: 'degreeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.personal2'
      2) Using $state.go programatically:
        $state.go('startedPage.personal2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
      /page1/tab3/page10
  */
  .state('startedPage.personal2', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/personal2.html',
        controller: 'personal2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/personal2.html',
        controller: 'personal2Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/personal2.html',
        controller: 'personal2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.personal3'
      2) Using $state.go programatically:
        $state.go('startedPage.personal3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
      /page1/tab3/page11
  */
  .state('startedPage.personal3', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/personal3.html',
        controller: 'personal3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/personal3.html',
        controller: 'personal3Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/personal3.html',
        controller: 'personal3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.personal4'
      2) Using $state.go programatically:
        $state.go('startedPage.personal4');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page12
      /page1/tab2/page12
      /page1/tab3/page12
  */
  .state('startedPage.personal4', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/personal4.html',
        controller: 'personal4Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/personal4.html',
        controller: 'personal4Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/personal4.html',
        controller: 'personal4Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.certification'
      2) Using $state.go programatically:
        $state.go('startedPage.certification');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page13
      /page1/tab2/page13
  */
  .state('startedPage.certification', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/certification.html',
        controller: 'certificationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/certification.html',
        controller: 'certificationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='startedPage.page14'
      2) Using $state.go programatically:
        $state.go('startedPage.page14');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab2/page14
  */
  .state('startedPage.page14', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/page14.html',
        controller: 'page14Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/page14.html',
        controller: 'page14Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab2/page2')

  

});