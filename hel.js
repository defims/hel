;(function(){
/*
 * =square matrix multiply square matrix
 * */
function MxM() {
    var args = arguments
        ,len = args.length
        ,M1 = args[0]
        ,M2 = args[1]
        ,n = Math.sqrt(len)
        ;
    function eij(M ,i ,j) {
        
    }
    function Mij(i ,j){
        var r,result
            ;
        for (r = 1; r <= n; r++) {
            result += eij(M1 ,i ,r) * eij(M2 ,r ,j)
        }
    }
    function M() {
        var m = []
            ,i ,j
            ;
        for( i = 0 ;i < len ;i++ ) {
            for( j = 0 ;j < len ;j++ ) {
                Mij(i ,j)
            }
        }
    }
    console.log(args)
}
function MxV(M ,V) {

}
console.log(MxM([
     1 ,2
    ,3 ,4
],[
     1 ,2
    ,3 ,4
]))
})();
