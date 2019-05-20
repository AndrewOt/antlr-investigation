class ASTGenerator {
    constructor(visitor, tree) {
        this.visitor = visitor;
        this.tree = tree;
        this.AST = {};
    }

    generateAST() {
        console.log(this.visitor.visitObject(this.tree));
    }

    visitChildren(context) {
        this.AST['rootElem'] = context.children;
    }

}

module.exports = { ASTGenerator };
