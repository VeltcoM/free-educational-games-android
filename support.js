chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Open ApkOnline Android online for Education Apps and Games",
        id: "EducationAppsGamesApkOnline",
        contexts: ["selection", "link", "editable", "image"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "EducationAppsGamesApkOnline") {
        EducationAppsGamesApkOnline();
    }
});

function EducationAppsGamesApkOnline() {         
  	
  		gourl =  "https://www.apkonline.net/games/educational";
    	window.open(gourl,'_blank');
	
}



