/* gallery.js */

$(document).ready(function(){
  // 1. 변수선언
  let g_img = $('.g_list li a');
  const g_nav = $('.g_nav ul li a');
  let img_url, title;
  let n = 1;
  let total_n = $('.g_list li').length; //12
  console.log(total_n);


  //2. g_nav클릭시 act서식 적용하고 부모의 다른  형제요소의 자식요소 a에는 act서식을 제거한다.
  g_nav.click(function(e){
    e.preventDefault();
    $(this).addClass('act').parent().siblings().find('a').removeClass('act');

    if($(this).parent().index()==0){
      //1. 전체메뉴 클릭시 12장의 목록이 전체 보여진다
      //기존 li목록은 무조건 숨기고, 해당하는 목록만 보이게 하기
      $('.g_list li').hide()
      $('.g_list li').fadeIn()

    }else if($(this).parent().index()==1){
    //2. 기획버튼 클릭시 기획 이미지('.plan') 보여진다
    //기존 li목록은 무조건 숨기고, 해당하는 목록만 보이게 하기
    $('.g_list li').hide()
    $('.plan').fadeIn()

    }else if($(this).parent().index()==2){
    //3. 설계버튼 클릭시 .design이 보여진다
    //기존 li목록은 무조건 숨기고, 해당하는 목록만 보이게 하기
    $('.g_list li').hide()
    $('.design').fadeIn()

    }else if($(this).parent().index()==3){
    //4 디자인버튼 클릭시 .ui가 보여진다
    //기존 li목록은 무조건 숨기고, 해당하는 목록만 보이게 하기
    $('.g_list li').hide()
    $('.ui').fadeIn()

    }else{
    //5. 개발버튼 클릭시 .coding이 보여진다.
    //기존 li목록은 무조건 숨기고, 해당하는 목록만 보이게 하기
    $('.g_list li').hide()
    $('.coding').fadeIn()
    }
  });
  
  //3. 이벤트 
  g_img.hover(function(){ //mouseenter
    $(this).find('.caption').stop().animate({'bottom':'0px'},200);
  },function(){ //mouseleave
    $('.caption').stop().animate({'bottom':'-40px'},100);
  });

  //4. 이미지 클릭시 모달 윈도 띄우기
  g_img.click(function(e){
    e.preventDefault();

    //선택한 a요소의 href속성값을 변수에 저장한다.
    img_url = $(this).attr('href');

    //선택한 a요소의 title값을 변수에 저장한다.
    title = $(this).attr('title')

    //저장된 img_url값을 출력해본다.
    // console.log(img_url);


      n = $(this).parent().index()+1
      console.log(n)

    let modal=`
      <div class="modal">
        <div class="m_inner">
          <h3>${title}</h3>
          <img src="${img_url}" alt="">
          <span>${n}/${total_n}</span>
          <i class="fas fa-times c_btn"></i>
          <i class="fas fa-angle-left"></i>
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    `;

    // body뒤에 모달내용을 출력한다.
    $('body').append(modal);

    //좌, 우 버튼 클릭시 [이미지, 타이틀, 페이지번호] 변경
    $('.modal i.fa-angle-left').click(function(){
      //1씩 감소
      if(n==1){
        n=12
      }else{
        n--
      }
      //[숫자, 타이틀제목 이미지]변경 함수 호출
      dataChange(n); //n값을 넘겨줌
    })

    $('.modal i.fa-angle-right').click(function(){
      //1씩 증가
      if(n==12){
        n=1
      }else{
        n++
      }
      //[숫자, 타이틀제목 이미지]변경 함수 호출
      dataChange(n);
    })

    //[숫자, 타이틀제목 이미지]변경 함수
    function dataChange(i){ //값을 넘겨받아 처리함
      //1. 페이지번호 <span>${i}/${total_n}</span>
      $('.modal span').text(`${i}/${total_n}`)

      //2. caption의 text값을 가져와서 출력
      $('.modal h3').text($('.g_list li').eq(i-1).find('.caption').text())
      
      // //3. 이미지 태그에 해당 번호를 삽입해 이미지 변경하기
      // //방법1. 변수값을 사용해 구현

      // if(i==4||i==9||i==11){
      // //만약에 i가 4,9,11일때만 아래 내용 적용한다
      //   $('.modal img').attr('src','./images/img'+i+'.png')
      // }else{
      //   $('.modal img').attr('src','./images/img'+i+'.jpg')
      // }
      
      //방법2. 이미지 주소값을 가져와서 이미지 변경
      let src = $('.g_list li').eq(i-1).find('img').attr('src')
      $('.modal img').attr('src', src)

      
    }



    //닫기 버튼을 클릭시 모달을 숨겨라
    $('.modal .c_btn').click(function(){
    //$('.modal .c_btn[type=button]').click(function(){
      $('.modal').fadeOut();
    });

    return false;
  });


});

