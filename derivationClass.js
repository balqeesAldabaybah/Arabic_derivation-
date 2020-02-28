class DeriveFromTo{
    /*wazen variable will be actiavted in future for more scalability */
    static Derive_Esm_Alfael(root, wazen){
        var Derv1_EsmAlfael ="" ; 
        /*مهموز الفاء */
        if(root.getFirst_Fa() == suffixes.ALF_HAMZA){
            Derv1_EsmAlfael += String.fromCharCode(suffixes.MADA) ;
            Derv1_EsmAlfael += String.fromCharCode(root.getMiddle_Een()) + String.fromCharCode(Haraka.KASRA)  ;
            Derv1_EsmAlfael += String.fromCharCode(root.getLast_Lam())+String.fromCharCode(Haraka.SOKOUN);

        }
        /*مهموز العين */
        else if(root.getMiddle_Een() == suffixes.ALF_HAMZA){
            Derv1_EsmAlfael += String.fromCharCode(root.getFirst_Fa()) + String.fromCharCode(Haraka.FATHA);
            Derv1_EsmAlfael += String.fromCharCode(vowels.ALF);
            Derv1_EsmAlfael += String.fromCharCode(suffixes.HAMZA_NABERA)+ String.fromCharCode(Haraka.KASRA)+ String.fromCharCode(root.getLast_Lam())+String.fromCharCode(Haraka.SOKOUN);
        }
        /*مهموز اللام */
        else if(root.getLast_Lam()==suffixes.ALF_HAMZA){
            Derv1_EsmAlfael += String.fromCharCode(root.getFirst_Fa()) + String.fromCharCode(Haraka.FATHA) ;
            Derv1_EsmAlfael += String.fromCharCode(vowels.ALF);
            Derv1_EsmAlfael += String.fromCharCode(root.getMiddle_Een())+String.fromCharCode(Haraka.KASRA)+String.fromCharCode(suffixes.HAMZA_NABERA)+ String.fromCharCode(Haraka.SOKOUN);
        }
       /* ليس مهموز الفاء أو اللام أو العين  */
        else{
            /* wazen = aAaabIcS */
            Derv1_EsmAlfael += String.fromCharCode(root.getFirst_Fa()) + String.fromCharCode(Haraka.FATHA);
            Derv1_EsmAlfael += String.fromCharCode(vowels.ALF);
            Derv1_EsmAlfael += String.fromCharCode(root.getMiddle_Een())+ String.fromCharCode(Haraka.KASRA)+ String.fromCharCode(root.getLast_Lam())+String.fromCharCode(Haraka.SOKOUN);
        }
        return Derv1_EsmAlfael;
    }
}