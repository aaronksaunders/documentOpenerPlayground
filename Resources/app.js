// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var ciDocOpener = require('com.ci.docOpener');
Ti.API.info("module is => " + ciDocOpener);

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    title:'Tab 1',
    backgroundColor:'#fff',
    width:'100%',
    height:'100%',
});
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
    color:'#999',
    text:'I am Window 2',
    font: {
        fontSize:20,
        fontFamily:'Helvetica Neue'
    },
    textAlign:'center',
    width:'auto'
});

win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

// open tab group
tabGroup.open();

button = Ti.UI.createButton({
    title:"button"
});

var http = Titanium.Network.createHTTPClient();
http.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
var url = "http://greenlyyt.iriscouch.com/greenlyyt/" + Ti.Platform.createUUID()+"/";
http.open("PUT", url);
Ti.API.debug(url);

http.onload = function() {
    Ti.API.debug(http.responseText);
}
http.onerror = function(e) {
    Ti.API.debug(e);
}
http.send(JSON.stringify({
    title:"test",
    body:"test document body " + new Date()
}));
Ti.API.debug(http.url);

var o;
button.addEventListener("click", function(e) {
    o = ciDocOpener.useDocumentOpener({
        button: button,
        path: "dcps012.pdf"
    });
});
win1.rightNavButton = button;