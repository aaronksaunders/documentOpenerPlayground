// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var ciDocOpener = require("com.ci.docOpener");
Ti.API.info("module is => " + ciDocOpener);

Ti.API.info(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "/dcps012.pdf").nativePath);

button = Ti.UI.createButton({
    top: 10,
    left: 10,
    height: 30,
    width: 100,
    title: "button"
});
window.add(button);

button.addEventListener('click',
function(e) {
    ciDocOpener.useDocumentOpener({
        button: button,
        x:10,
        y:10,
        width:200,
        height: 300,
        path: "dcps012.pdf"
    });
});
