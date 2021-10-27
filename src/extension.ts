// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	//console.log('Congratulations, your extension "backman" is now active!');

	let position1 : vscode.Position | undefined;
	let position2 : vscode.Position | undefined;
	//イベントリスナ
	//let activeEditor = vscode.window.activeTextEditor;

	// 選択が変更された場合
	vscode.window.onDidChangeTextEditorSelection(event => {
		//if (activeEditor && event.textEditor === activeEditor){
			// カーソル位置
			position1= position2;
			position2 = vscode.window.activeTextEditor?.selection.active;
			//console.log("選択");
			//console.log(gPosition2?.character + ":" + gPosition2?.line);
		//}
  	});

	let disposable = vscode.commands.registerCommand('backman.excecute', () => {
		//vscode.window.showInformationMessage('Hello World from BackMan!');
		if(position1?.line !== position2?.line){
			//console.log("2回");
			//console.log(position1?.character + ":" + position1?.line);
			vscode.commands.executeCommand("workbench.action.navigateBack");
			vscode.commands.executeCommand("workbench.action.navigateBack");
		}else{
			vscode.commands.executeCommand("workbench.action.navigateBack");
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
