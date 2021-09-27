
// helper method recursion 

function outer(input) {
    var outerScopreVariable = [];

    function helper(helperInput){
        // modify the outerScopeVariable 
        helper(helperInput--)
    }
    helper(input)

    return outerScopreVariable;
}