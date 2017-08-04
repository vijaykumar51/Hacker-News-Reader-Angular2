"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ts = require("typescript");
var Lint = require("tslint");
var tsUtil = require("tsutils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        console.log("public Doc rule running");
        var options = this.ruleArguments;
        // return this.applyWithWalker(new PublicDocWalker(sourceFile, this.ruleName, this.ruleArguments));
        return this.applyWithFunction(sourceFile, walk, options);
    };
    Rule.FAILURE_STRING = "public method forbidden";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    return ts.forEachChild(ctx.sourceFile, function recur(node) {
        // console.log("node outside", node);
        console.log("function declaration type = ", ts.SyntaxKind.FunctionDeclaration);
        if (tsUtil.isClassLikeDeclaration(node)) {
            for (var _i = 0, _a = node.members; _i < _a.length; _i++) {
                var child = _a[_i];
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
    function shouldChecK(node) {
        console.log("check equality ", node.kind === ts.SyntaxKind.MethodDeclaration, node.kind, ts.SyntaxKind.MethodDeclaration);
        return node.kind === ts.SyntaxKind.MethodDeclaration;
    }
    function isPublicModifier(node) {
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
