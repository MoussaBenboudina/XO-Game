var cont = document.querySelector('body div.container');
var box = document.querySelectorAll('.box');
var arrayBox = Array.from(box)
var turn='x';
var divTurn = document.querySelector('.turn')

var bgWin = document.querySelector('.bg-win')
var nameWin =  document.querySelector('.bg-win div h5 span');

divTurn.innerHTML = turn;
function start(){
arrayBox.forEach(ele =>{
    ele.addEventListener('click' , function(){
        if(turn === 'x' && ele.innerHTML == ""){
        ele.innerHTML = "X";
        turn = 'o'
        divTurn.innerHTML = turn;
       win();
        }else if(turn === 'o' && ele.innerHTML == ""){
            ele.innerHTML = "O"
            ele.setAttribute('data-o','o');
            turn = 'x';
            divTurn.innerHTML = turn;
            win()
        }
        })})}
        start();


 var x = document.querySelector('.x');
 var o =document.querySelector('.o');  
 console.log(x.innerHTML)  
 


 function winX(n1,n2,n3){
    x.innerHTML =`${parseInt(x.innerHTML)+1}`
    setTimeout(()=>{
     for(var i=0;i<9;i++)
     arrayBox[i].innerHTML ="";
     cont.classList.remove('no-click');
arrayBox[n1].classList.remove('win');
arrayBox[n2].classList.remove('win');
arrayBox[n3].classList.remove('win');
     start();
    },2000);
 }


 function winO(n1,n2,n3){
    o.innerHTML =`${parseInt(o.innerHTML)+1}`
    setTimeout(()=>{
     for(var i=0;i<9;i++)
     arrayBox[i].innerHTML ="";
     cont.classList.remove('no-click');
arrayBox[n1].classList.remove('win');
arrayBox[n2].classList.remove('win');
arrayBox[n3].classList.remove('win');
     start();
    },2000);
 }

function draw(){
    setTimeout(()=>{
        for(var i=0;i<9;i++)
        arrayBox[i].innerHTML ="";
    },1000)
   
}





        function win(){
       
    if( arrayBox[0].innerHTML ==  arrayBox[1].innerHTML &&
        arrayBox[0].innerHTML ==  arrayBox[2].innerHTML &&
        arrayBox[1].innerHTML != ""){
            arrayBox[0].classList.add('win');
            arrayBox[1].classList.add('win');
            arrayBox[2].classList.add('win');
            cont.classList.add('no-click');
        
                if(arrayBox[1].innerHTML == 'X')
                    winX(0,1,2)
                else if(arrayBox[1].innerHTML == 'O')
                    winO(0,1,2)
              
             

        }else if(arrayBox[3].innerHTML ==  arrayBox[4].innerHTML &&
        arrayBox[3].innerHTML ==  arrayBox[5].innerHTML &&
        arrayBox[3].innerHTML != ""){
        arrayBox[3].classList.add('win');
        arrayBox[4].classList.add('win');
        arrayBox[5].classList.add('win');
        cont.classList.add('no-click');
          
        if(arrayBox[3].innerHTML == 'X')
        winX(3,4,5)
    else if(arrayBox[3].innerHTML == 'O')
        winO(3,4,5)


        }else if(arrayBox[6].innerHTML ==  arrayBox[7].innerHTML &&
        arrayBox[6].innerHTML ==  arrayBox[8].innerHTML &&
        arrayBox[6].innerHTML != ""){
            arrayBox[6].classList.add('win');
            arrayBox[7].classList.add('win');
            arrayBox[8].classList.add('win');
            cont.classList.add('no-click');
        
            if(arrayBox[6].innerHTML == 'X')
            winX(6,7,8)
        else if(arrayBox[6].innerHTML == 'O')
            winO(6,7,8)

        }else if(arrayBox[0].innerHTML ==  arrayBox[3].innerHTML &&
        arrayBox[0].innerHTML ==  arrayBox[6].innerHTML &&
        arrayBox[0].innerHTML != ""){
            arrayBox[0].classList.add('win');
            arrayBox[3].classList.add('win');
            arrayBox[6].classList.add('win');
            cont.classList.add('no-click');
     
            if(arrayBox[0].innerHTML == 'X')
            winX(0,3,6)
        else if(arrayBox[0].innerHTML == 'O')
            winO(0,3,6)

        }else if( arrayBox[1].innerHTML ==  arrayBox[4].innerHTML &&
        arrayBox[1].innerHTML ==  arrayBox[7].innerHTML &&
        arrayBox[1].innerHTML != "") {
            arrayBox[1].classList.add('win');
            arrayBox[4].classList.add('win');
            arrayBox[7].classList.add('win');
            cont.classList.add('no-click');
           
            if(arrayBox[1].innerHTML == 'X')
            winX(1,4,7)
        else if(arrayBox[1].innerHTML == 'O')
            winO(1,4,7)

        }else if( arrayBox[2].innerHTML ==  arrayBox[5].innerHTML &&
        arrayBox[2].innerHTML ==  arrayBox[8].innerHTML &&
        arrayBox[2].innerHTML != ""){
            arrayBox[2].classList.add('win');
            arrayBox[5].classList.add('win');
            arrayBox[8].classList.add('win');
            cont.classList.add('no-click');
         
            if(arrayBox[2].innerHTML == 'X')
            winX(2,5,8)
        else if(arrayBox[2].innerHTML == 'O')
            winO(2,5,8)

        }else if( arrayBox[0].innerHTML ==  arrayBox[4].innerHTML &&
        arrayBox[0].innerHTML ==  arrayBox[8].innerHTML &&
        arrayBox[0].innerHTML != ""){
            arrayBox[0].classList.add('win');
            arrayBox[4].classList.add('win');
            arrayBox[8].classList.add('win');
            cont.classList.add('no-click');
            
            if(arrayBox[0].innerHTML == 'X')
            winX(0,4,8)
        else if(arrayBox[0].innerHTML == 'O')
            winO(0,4,8)

        }else if( arrayBox[2].innerHTML ==  arrayBox[4].innerHTML &&
        arrayBox[2].innerHTML ==  arrayBox[6].innerHTML &&
        arrayBox[2].innerHTML != "") {
            arrayBox[2].classList.add('win');
            arrayBox[4].classList.add('win');
            arrayBox[6].classList.add('win');
            cont.classList.add('no-click');

            if(arrayBox[2].innerHTML == 'X')
            winX(2,4,6)
        else if(arrayBox[2].innerHTML == 'O')
            winO(2,4,6)
        }
        else if(arrayBox[0].innerHTML !="" &&
            arrayBox[1].innerHTML !="" && 
            arrayBox[2].innerHTML !="" &&
            arrayBox[3].innerHTML !="" &&
            arrayBox[4].innerHTML !="" &&
            arrayBox[5].innerHTML !="" &&
            arrayBox[6].innerHTML !="" &&
            arrayBox[7].innerHTML !="" &&
            arrayBox[8].innerHTML !="" ){
                draw();    
        }
    }