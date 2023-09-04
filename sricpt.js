const contanier = document.querySelector('.contanier');

let block = ['','','','','','','','',''];

let hand = 'x';

let result = '';

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

function genaratingboxs(){
   

 let i = 0;

    while(i<9){
        contanier.innerHTML += "<div class='box'></div>";
        i++;
       
    }
}


genaratingboxs();

let reset;

function checkWinning(play){
    winningCombos.forEach((win,idx)=>{
        const a = block[win[0]];
        const b = block[win[1]];
        const c = block[win[2]];
        
        if(a === b && b === c && a!== ''&& c !== ''){
           console.log('you won');
           hand = '';
           document.querySelectorAll('.box')[win[0]].classList.add('cross')
            document.querySelectorAll('.box')[win[1]].classList.add('cross')
           document.querySelectorAll('.box')[win[2]].classList.add('cross')

           reset = ()=>{
            document.querySelectorAll('.box')[win[0]].classList.remove('cross')
            document.querySelectorAll('.box')[win[1]].classList.remove('cross')
           document.querySelectorAll('.box')[win[2]].classList.remove('cross')
           }
        }

     })
}

document.querySelectorAll('.box').forEach((value,index)=>{

    function play(event){
        
            value.innerHTML = hand;
            block[index] = hand;
            console.log(block);
            checkWinning(play);
            
            if(hand==='x'){
                hand='o';
            }else if (hand === 'o'){
                hand='x';
            }
         
         event.target.removeEventListener('click',play);
        
    }
    value.addEventListener('click', play  );

    document.querySelector('button').addEventListener('click',()=>{
        block = ['','','','','','','','',''];
      
        value.innerHTML = ''
        value.addEventListener('click', play  );
        reset();
        hand = 'x'
    })
})




