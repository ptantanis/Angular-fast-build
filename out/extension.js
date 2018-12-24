'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
let textEditor;
function getSelectedText() {
    textEditor = vscode.window.activeTextEditor;
    if (textEditor) {
        return textEditor.document.getText(textEditor.selection);
    }
    else {
        textMissing();
        return '';
    }
}
function createWSEdite() {
}
function textMissing() {
    vscode.window.showInformationMessage('Text Missing!');
}
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "angular-fast-build" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposableList = [];
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });
    disposableList.push(disposable);
    disposable = vscode.commands.registerCommand('extension.getText', () => {
        const inputCommand = getSelectedText();
        if (inputCommand === '') {
            return;
        }
        const commandList = inputCommand.split('\n').map(command => command.trim());
        commandList.forEach(command => {
            console.log('-----------------------------');
            console.log(command);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map