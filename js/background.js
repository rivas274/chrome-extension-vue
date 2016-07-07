var BADGE_ACTIVE = {color:[204,0,51,255]};
var BADGE_LOADING = {color:[204,204,51,255]};
var BADGE_INACTIVE = {color:[153,153,153,255]};
chrome.browserAction.setIcon({path:'img/add.png'});
chrome.browserAction.setBadgeText({text: '66'});
chrome.browserAction.setBadgeBackgroundColor(BADGE_INACTIVE);
/*chrome.browserAction.setPopup({
        popup: "tracking.html"
    });*/
    localStorage.ini="hugo";
    alert(localStorage.ini);