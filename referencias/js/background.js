var storage = chrome.storage.local;
var myTestVar = 'myVariableKeyName';

storage.set({myTestVar:'my test var'});

storage.get(myTestVar,function(result){
    console.log(myTestVar,result);
    //console output = myVariableKeyName {}
});
storage.get('myTestVar',function(result){
    console.log(result);
    //console output = {myTestVar:'my test var'}
});
(function() {
    "use strict";
    chrome.runtime.sendMessage({action: "pagematchurls", url: window.location.href }, function(response) {
        if(response.isOk) {
            removeBanner();
            initPage();
        }
    });
})();