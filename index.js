const editJsonFile = require(`edit-json-file`)
const file = editJsonFile(`/Users/g3n6i/project/.vscode/settings.json`);
//THis should work, will try in vs app creation thingy. 
//const files = editJsonFile(`vscode.workspace.workspaceFolders[0].uri.path`)
//Nice one stack overflow, did't mention the import... reqs npm install -g yo generator-code
//const vscode = require('vscode');
//changes 1 week ago to import vscode. No documentation on how to use this to access workspace

const Timer = require('tiny-timer')
const timer = new Timer()
//timer.start(1500000) //full 25 minutes. 1000(ms)*60=60000 * 25 = 1.5m
//timer.start(300000) //5 minute presentation
timer.start(5000)

timer.on('done', () => {
    pomodoro_active = false; 
    console.log('timer complete');
    update()}
)

//system specific root folders
//Windows %APPDATA%\Code\User\settings.json
//macOS $HOME/Library/Application Support/Code/User/settings.json
//Linux $HOME/.config/Code/User/settings.json

var pomodoro_active = true;
var color;

const update = () => {
    if (pomodoro_active) color = "#3377DD";
    else {
        color = "#333333";
        var pomodoros = file.get("pomodoro.number\\.complete")
        if (pomodoros == null){
            pomodoros = 0
        }
        file.set("pomodoro", {
            "number.complete" : pomodoros +=1
        })
    }
    file.set("workbench\\.colorCustomizations", {
        "titleBar.activeBackground": color
    });
    file.save()
}

console.log('timer start')
// console.log(file)
update()
