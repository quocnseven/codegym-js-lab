var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

let againBtn = document.getElementById('btn-restart')
let boardbody = document.getElementById('boardbody');
let btnplay = document.getElementById('btnplay');
let result = document.getElementById('result');


class Rewards {
    constructor (img, name){
        this.img = img;
        this.name = name;
    }   
};
let ak47BornImg = new Image()
let ak47RoyalImg = new Image()
let ak47TranImg = new Image()
let ak47TransImg = new Image()
let awmGoldImg = new Image()
let awmInfernalImg = new Image()
let awmJadeImg = new Image()
let barrettBornImg = new Image()
let m4a1PredatorImg = new Image()
let m4a1SilentImg = new Image()
let logoImg = new Image()
let unfortunateImg = new Image()

ak47BornImg.src ="images/ak47bornbeast.jpg";
ak47RoyalImg.src ="images/ak47royal.jpg";
ak47TransImg.src ="images/ak47transformer.jpg";
awmGoldImg.src ="images/awmgold.webp";
awmInfernalImg.src ="images/awminfernal.jpg";
awmJadeImg.src ="images/awmjade.jpg";
barrettBornImg.src ="images/barrettbornbeast.jpg";
logoImg.src ="images/cf.jpg";
m4a1PredatorImg.src ="images/m4a1predator.webp";
m4a1SilentImg.src ="images/m4a1silencer.jpg";
unfortunateImg.src ="images/unfortunately.png";



let ak47Born = new Rewards (ak47BornImg, "AK47 Born Beast");
let ak47Royal = new Rewards (ak47RoyalImg, "AK47 Royal")
let ak47Tran = new Rewards (ak47TransImg, "AK47 Transformer")
let awmGold = new Rewards (awmGoldImg, "AWM Gold")
let awmInfer = new Rewards (awmInfernalImg, "AWM Inernal")
let awmJade = new Rewards (awmJadeImg, "AWM Jade")
let barrettBorn = new Rewards (barrettBornImg, "Barret Born Beast")
let m4a1Pre = new Rewards (m4a1PredatorImg, "M4A1 Predator")
let m4a1Sile = new Rewards (m4a1SilentImg, "M4A1 Silencer")
let logo = new Rewards (logoImg, "logo")
let unfortunate = new Rewards (unfortunateImg, "Chúc bạn may mắn lần sau !")




var items = [ak47Born, ak47Royal, ak47Tran, awmGold, awmInfer, awmJade, barrettBorn, m4a1Pre, m4a1Sile, unfortunate];
var itemsLength = items.length;








// show play btn
function showPlayBtn (){
    btnplay.style.display = "flex";
    run()
}

// an canvas
function hideCanvas (){
    document.addEventListener("click", function(){
        canvas.style.display = 'none';
        
    })
}

// hien button "choi lai"
function showAgainBtn (){
    againBtn.style.display = 'flex';
    
}
// an btn choi lai
function hideAgainBtn (){
    againBtn.style.display = 'none';
    
}

// hide btnplay
function hidePlayBtn (){
    btnplay.style.display = 'none';
}

// hien result
function showResult(){
    result.style.display = "flex";
};

// an result
function hideResult(){
    result.style.display = "none";
};

// lang nghe su kien click -> chay chuong trinh
btnplay.addEventListener("click",function(){
    run();
})


// an canvas  khi bam againBtn
againBtn.addEventListener('click', function(){
    again()
})


// run game
function run(){
    function randomItem(item){
        var randomNum = Math.floor(Math.random()*itemsLength);
        var itemRandoms = item[randomNum];
        return itemRandoms;
    }

    var randomResult = randomItem(items);
    var unFortunateName = unfortunate.name;

    // kiem tra quay vao o "chuc ban may man lan sau"
    function checkResult (randomname){
        if (randomname.name !== unFortunateName){
            result.innerHTML = `Chúc mừng bạn nhận được: ${randomResult.name}`;
        }else {
            result.innerHTML = `${randomResult.name}`;
        };
    };
    context.drawImage(randomResult.img,0,0,500, 500);
    checkResult(randomResult);
    showResult()
    hidePlayBtn ()
    showAgainBtn()
    canvas.style.opacity = '1';
   
}

function again(){
    context.drawImage(logo.img,0,0,500, 500);
    canvas.style.opacity = '0';
    btnplay.style.display = 'flex';
    hideAgainBtn()
    result.style.display = 'none';
}






  




 