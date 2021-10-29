import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    
    let position1 : vscode.Position | undefined;
    let position2 : vscode.Position | undefined;

    // 選択が変更された場合
    vscode.window.onDidChangeTextEditorSelection(event => {
        // カーソル位置
        position1= position2;
        position2 = vscode.window.activeTextEditor?.selection.active;
      });

    let disposable = vscode.commands.registerCommand('backman.excecute', () => {
        // 右クリックが異なる行の場合、2回戻す
        if(position1?.line !== position2?.line){
            vscode.commands.executeCommand("workbench.action.navigateBack");
        }
        vscode.commands.executeCommand("workbench.action.navigateBack");
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
