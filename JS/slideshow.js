var Kichthuoc= document.getElementsByClassName("main1-1")[0].clientWidth;
var Chuyenslide=document.getElementsByClassName("list-images")[0];
var Img=Chuyenslide.getElementsByTagName("img");
var Max=Kichthuoc*Img.length;
Max-=Kichthuoc;
var Chuyen=0;

function Next(){
    if (Chuyen<Max) Chuyen+=Kichthuoc;
    else Chuyen=0;
    Chuyenslide.style.marginLeft='-'+Chuyen+'px';
    
}

function Back(){
    if (Chuyen==0) Chuyen=Max;
    else Chuyen-=Kichthuoc;
    Chuyenslide.style.marginLeft='-'+Chuyen+'px';
}

// setInterval(function(){
//     Next();
// },3000);