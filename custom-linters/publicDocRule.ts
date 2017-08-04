import * as ts from "typescript";
import * as Lint from "tslint";
import * as tsUtil from "tsutils";

export class Rule extends Lint.Rules.AbstractRule {
	public static FAILURE_STRING = "public method forbidden";

	public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
		console.log("public Doc rule running");
		const options = this.ruleArguments;
		// return this.applyWithWalker(new PublicDocWalker(sourceFile, this.ruleName, this.ruleArguments));
		return this.applyWithFunction(sourceFile, walk, options);
	}

}
function walk(ctx: Lint.WalkContext<{}>) {
	return ts.forEachChild(ctx.sourceFile, function recur(node: ts.Node): void {
		// console.log("node outside", node);
		console.log("function declaration type = ", ts.SyntaxKind.FunctionDeclaration);
		if (tsUtil.isClassLikeDeclaration(node)) {
			for (const child of node.members) {
				console.log("child", child);
				console.log("check equality ", child.kind === ts.SyntaxKind.MethodDeclaration, child.kind, ts.SyntaxKind.MethodDeclaration);
				if (child.kind === ts.SyntaxKind.MethodDeclaration) {
					console.log("modifier check ", child.modifiers, ts.SyntaxKind.PublicKeyword);
					if (Lint.hasModifier(child.modifiers, ts.SyntaxKind.PublicKeyword)) {
						console.log("inside addFailureAtNode");
						ctx.addFailureAtNode(child, Rule.FAILURE_STRING);
					}
				}
				// if (shouldCheck(child) && !isPublicModifier(child)) {
				// 	this.addFailureAtNode(child, Rule.FAILURE_STRING);
				// }
			}
		}
		return ts.forEachChild(node, recur);
	});


	function shouldChecK(node: ts.ClassElement) {
		console.log("check equality ", node.kind === ts.SyntaxKind.MethodDeclaration, node.kind, ts.SyntaxKind.MethodDeclaration);
		return node.kind === ts.SyntaxKind.MethodDeclaration;
	}

	function isPublicModifier(node: ts.ClassElement): boolean {
		console.log("modifier check ", node.modifiers, ts.SyntaxKind.PublicKeyword);
		return Lint.hasModifier(node.modifiers, ts.SyntaxKind.PublicKeyword);
	}
}



// export class PublicDocWalker extends Lint.AbstractWalker<any[]> {
// 	public PublicDocWalker() {
// 		console.log("constructor called");
// 	}
// 	public walk(sourceFile: ts.SourceFile) {
// 		console.log("inside walk", sourceFile);
// 		const cb = (node: ts.Node): void => {
// 			console.log("inside cb", node);
// 			if (node.kind === ts.SyntaxKind.FunctionDeclaration) {
// 				console.log("node", node);
// 				if (this.isPublicModifier(node)) {
// 					console.log("inside public", node);
// 					this.addFailureAtNode(node, Rule.FAILURE_STRING);
// 				}
// 			} else {
// 				ts.forEachChild(node, cb);
// 			}
// 		};
// 	}

// 	private isPublicModifier(node: ts.ClassElement): boolean {
// 		return Lint.hasModifier(node.modifiers, ts.SyntaxKind.PublicKeyword);
// 	}
// }