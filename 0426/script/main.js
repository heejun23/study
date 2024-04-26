$(document).ready(function () {

  //1.변수
  let gnb = $('.gnb > ul > li > a')// 메인메뉴 변수
  let i = 0; //인덱스 값!
  let slide = $(".slide_wrapper div");
  let c_btn = $(".lnb li");
  const l_btn = $('.slide .s_btn li:first-child img')
  const r_btn = $('.slide .s_btn li:last-child img')
  let t_mnu = $('.tab_con li a')

  //메인메뉴 클릭시 해당 서브만 나오게하기
  gnb.click(function(){
    //내가 선택한 a요소의 sub메뉴는 나오게 하고
    //부모의 형제요소들의 자손인 .sub는 숨긴다
    $(this).next().toggle().parent().siblings().find('.sub').hide()
    return false
  })
  // 다른곳 클릭하면 서브메뉴 숨기기
  $('body').click(function(){
    $('.sub').hide()
  })

  //2. 이미지가 변하는 함수 (숨기는게 우선이다)
  function fadeInOut() {
    c_btn.removeClass("act"); //컨트롤 버튼에 서식 모두 제거하고
    slide.eq(i).fadeOut(); // 인덱스번호에 해당하는 이미지를숨김
    if (i == 2) {
      //만약에 인덱스 값이 2라면 = 마지막 이미지라면
      i = 0; //인덱스값을 1로 대입하고
    } else {
      //그렇지 않으면
      i++; //1씩 더해 다음 이미지가 나오게 한다.
    }
    slide.eq(i).fadeIn(); //인덱스 번호에 해당하는 n번재 이미지가 나옴
    c_btn.eq(i).addClass("act"); //인덱스 번호에 해당하는 컨트롤 버튼에 서식 적용
  }

  function fadeInOut2() {
    c_btn.removeClass("act"); //컨트롤 버튼에 서식 모두 제거하고
    slide.eq(i).fadeOut(); // 인덱스번호에 해당하는 이미지를숨김
    if (i == 0) {
      //만약에 인덱스 값이 0이라면 = 처음 이미지라면
      i = 2; //인덱스값을 2로 대입하고
    } else {
      //그렇지 않으면
      i--; //1씩 빼서 이전 이미지가 나오게 한다.
    }
    slide.eq(i).fadeIn(); //인덱스 번호에 해당하는 n번재 이미지가 나옴
    c_btn.eq(i).addClass("act"); //인덱스 번호에 해당하는 컨트롤 버튼에 서식 적용
  }


  //좌우버튼 클릭시 각각 해당 함수 호출하여 이미지 변경
  l_btn.click(function(){
    clearInterval(Timer)  //기존 시간 제거
    fadeInOut2()  //해당방향으로 움직이게
  })

  r_btn.click(function(){
    clearInterval(Timer)  //기존 시간 제거
    fadeInOut() //해당 방향으로 움직이게
  })

  //3. 3초마다 반복실행 => Timer
  let Timer = setInterval(fadeInOut, 3000);

  // 컨트롤 버튼
  c_btn.click(function () {
    clearInterval(Timer)  //기존 시간 제거
    // 컨트롤버튼 클릭했을 때
    i = $(this).index(); // i에 컨트롤버튼의 인덱스번호를 대입
    console.log(i); //0 ,1 ,2

    c_btn.removeClass("act"); //컨트롤 버튼에 서식 모두 제거하고
    slide.eq(i).siblings().fadeOut(); // 인덱스번호에 해당하는 이미지를 제외한 나머지를 숨김

    slide.eq(i).fadeIn(); //인덱스 번호에 해당하는 n번재 이미지가 나옴
    c_btn.eq(i).addClass("act"); //인덱스 번호에 해당하는 컨트롤 버튼에 서식
  });

  //좌우버튼, 컨트롤버튼에 마우스 아웃시 자동으로 플레이되게 하기
  $('.slide .s_btn li img, .slide .lnb li').mouseleave(function(){
    clearInterval(Timer);
    Timer = setInterval(fadeInOut,3000)
  })

  //정지버튼
  $("i.fa-pause").click(function () {
    clearInterval(Timer);
    if ($(this).hasClass("fas fa-pause") == true) {
      clearInterval(Timer);
      $(this).attr("class", "fas fa-play");
    } else {
      $(this).attr("class", "fas fa-pause");

      Timer = setInterval(fadeInOut, 3000);
    }
  });


  //탭콘텐츠 메뉴 클릭시 a서식 지우고 내가 클릭한 메뉴만 t_act서식 적용하기
  t_mnu.click(function(){
    $(this).addClass('t_act').parent().siblings().find('a').removeClass('t_act')
    $('.cont').hide() //보이는 콘텐츠 모두 숨기기
    $(this).next().show() //해당 콘텐츠 나오게 한다

    let t_index = $(this).parent().index()
    console.log(t_index)  //0 ,1 ,2
    
    //마지막 콘텐츠 높이 서식
    if(t_index==2){
      $('.tab_con_wrap article').height(800)
    }else{
      $('.tab_con_wrap article').height(500)
    }

    return false
  })


  //이벤트 슬라이드
  let e_left_btn = $('.event i.fa-angle-left')
  let e_right_btn = $('.event i.fa-angle-right')
  const eslide = $('.es_wrap')

  //1번이미지 앞에 3번이 오게 배치
  $('.es_wrap  > div:last-child').insertBefore('.es_wrap > div:first-child')
  eslide.css('margin-left','-100%')

  //움직이는 함수
  function e_move_left(){
    eslide.animate({'margin-left':'-200%'}, 500, function(){
      $('.es_wrap  > div:first-child').insertAfter('.es_wrap > div:last-child')
      eslide.css('margin-left','-100%')
    })
  }

  function e_move_right(){
    
  }

  //시간객체 - 3초마다 함수 호출하기
  let eTimer = setInterval(e_move_left,3000)

  //버튼 클릭시 각각 해당 함수 호출
  e_left_btn.click(function(){
    clearInterval(eTimer)
    e_move_left()
  })

  e_right_btn.click(function(){
    clearInterval(eTimer)
    e_move_right()
  })

  //좌우버튼에 마우스 아웃시 다시 자동재생하기
  $('.event i.fas').mouseleave(function(){
    eTimer = setInterval(e_move_right,3000)
  })


});
