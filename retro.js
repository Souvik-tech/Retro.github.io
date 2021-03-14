function projectbox(){
   const box= document.getElementById("background-box-cover").style.visibility="visible";
    const backgroundtext=document.getElementById("text").style.visibility="hidden";
    
}
function emptymsg(){
    const input =document.getElementById('backgroundbox-input');
    const alertmsg=document.getElementById("emptymsg");
    if(input.value==""){
       alertmsg.style.visibility="visible";
        return false;
    }else{
        return true;
    }
}
function hidemsg(){
    const hide=document.getElementById("emptymsg").style.visibility='hidden';
}


//Secondpage//


function visiblecollison(){
    const collisoncheckbox=document.getElementById("collisoncheckbox");
    const collisonitems=document.getElementById("collison-items");
    
    if(collisoncheckbox.checked==true){
        collisonitems.style.visibility="visible";
    }
    else{
         collisonitems.style.visibility="hidden";
    }
}
function visibleglobalphysicsitems(){
    const gravitycheckbox=document.getElementById("visibleglobalphysics-checkbox");
    const gravityitems=document.getElementById("global-physics-items");
     const collisonitems=document.getElementById("collison-items");
    
    if(gravitycheckbox.checked==true){
        gravityitems.style.visibility="visible";
    
    }else{
        gravityitems.style.visibility="hidden";
        collisonitems.style.visibility="hidden";
    }
}
