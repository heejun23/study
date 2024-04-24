//갤러리 스크립트


//변수 - 페이지번호, 좌,우버튼
let n=1;
let img_n=document.querySelectorAll('.list_photo > li') //li태그가 많아서 쿼리셀렉터올
let l_btn =document.querySelectorAll('.fa-angle-left')
let r_btn =document.querySelectorAll('.fa-angle-right')

document.getElementById('img_num').innerHTML=n+'/17' //페이지번호 표시

//썸네일 이미지 목록(li)태그 클릭시 해당 인덱스번호를 구해서
for(let i=0;i<img_n.length;i++){
  img_n[i].addEventListener('click',function(){
    // console.log(i+1); //선택한 목록이 i값 출력 1~17
    n=i+1; // n=1
    imgChange(n); //함수야 받으라~ (function imgChange())
  });
}

//이미지 변경하기 위한 함수로 넘기기

/*사용자 정의 함수만들기!  imgChange()
  1. 숫자변경
  2. 이미지변경
*/ 
function imgChange(){
  console.log(n);
  
  //li목록에 적용된 테두리 서식 모두 제거
  for(let j=0;j<img_n.length;j++){
    img_n[j].style.border='none'
    img_n[j].style.box_sizing='border-box'
  }

  //현재번호에 맞는 목록에 테두리서식 적용
  img_n[n-1].style.border='3px solid #f00'


  //페이지번호 표시
  document.getElementById('img_num').innerHTML=n+'/17' 

  //메인 이미지 변경
  document.getElementById('main').src='./images01/movie_image'+n+'.jpg';
}


//forEach 함수는 배열에서만 사용가능한 메서드이다.
/*
문법
  객체.forEach((매개변수,index)){
    각각 실행할 함수 내용
  }
*/ 

//좌,우버튼 클릭시 n값을 imgChange함수에 넘기기
l_btn.forEach((el)=>{
  el.addEventListener('click',()=>{
  // alert('왼쪽버튼');
  if(n==1){
    n=17;
  }else{
    n--;
  }
  imgChange(n); //숫자를 함수에 넘겨준다
  });
});

r_btn.forEach((el)=>{
  el.addEventListener('click',()=>{
  // alert('오른쪽이');
  if(n==17){
    n=1;
  }else{
    n++;
  }
  imgChange(n);
  });
});












