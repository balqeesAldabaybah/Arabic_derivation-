 class constructRoot {
    fel; //الفعل الثلاثي 
    

   constructor(root){
       this.fel = new Array();
       this.fel = root;
       this.cleanFelFromHARAKAT();
   }
    
   isShadda (ascii){
       if(ascii == Haraka.SHADDA)
           return true;
       else 
           return false;
   }
   isHaraka (ascii){
       if(ascii == Haraka.FATHA)
           return true;
       else if(ascii == Haraka.DAMA)
           return true;
       else if(ascii == Haraka.KASRA)
           return true;
       else if(ascii == Haraka.SOKOUN)
           return true;
       else if(ascii == Haraka.TANWEEN_DAM)
           return true;
       else if(ascii == Haraka.TANWEEN_FATH)
           return true;
       else if(ascii == Haraka.TANWEEN_KASR)
           return true;
   }
    cleanFelFromHARAKAT (){
       for(var i=0; i<this.fel.length; i++){
           if(this.isHaraka(this.fel[i])){
               this.fel.splice(i,1);
           }
       }
    }
    getFirst_Fa(){
      return  this.fel[0];
   }   
   getMiddle_Een(){
      return  this.fel[1];
   }
   getLast_Lam(){
       return this.fel[2];
   }

   getRootStringWithHarakat (){
       return String.fromCharCode(this.getFirst_Fa())+String.fromCharCode(Haraka.FATHA)
              + String.fromCharCode(this.getMiddle_Een())+String.fromCharCode(Haraka.FATHA)
              + String.fromCharCode(this.getLast_Lam())+String.fromCharCode(Haraka.FATHA);
   }
}