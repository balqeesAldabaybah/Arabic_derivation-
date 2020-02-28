//ميزان الفعل الثلاثي فَعَلَ
function DeriveEsmAlfael() {
    /* Three-letters based root */
    var splittedRootCount = document.getElementById("root").value.split("").length;
    /*store ASCIIs */
    var splittedRoot = new Array(splittedRootCount); 
    for(var i=0 ;i <splittedRootCount ; i++){
        splittedRoot[i] =  document.getElementById("root").value.charCodeAt(i);
    }
    const root = new constructRoot(splittedRoot);
    var result = DeriveFromTo.Derive_Esm_Alfael(root,"");
    document.getElementById("result").innerHTML =  "اسم الفاعل من <b>"+root.getRootStringWithHarakat() + " </b> هو :  <b>" + result + "</b>";
}