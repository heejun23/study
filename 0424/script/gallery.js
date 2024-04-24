// 갤러리 스크립트

$(document).ready(function () {
  //1. 변수 선언
  let g_img = $(".g_list li a");

  //2. 이벤트
  g_img.hover(
    function () {
      //mouseenter
      $(this).find(".caption").stop().animate({ bottom: "0" }, 200);
    },
    function () {
      //mpuseleave
      $(".caption").stop().animate({ bottom: "-40px" }, 200);
    }
  );

  //3. 이미지 클릭시 모달 윈도 띄우기
  g_img.click(function () {
    //선택한 a요소의 href속성값을 변수에 저장하기
    img_url = $(this).attr("href");

    // 저장된 img_url값을 출력해본다
    console.log(img_url);

    let modal = `
  <div class="box">
    <div class="modal">
      <img src="${img_url}" alt="">
      <input type="button" value="닫기" class="c_btn">
    </div>
  </div>
  `;
    //bodu뒤에 모달내용 출력하기
    $("body").append(modal);

    //닫기 버튼 클릭하면 모달창 숨기기
    $(".modal .c_btn").click(function () {
      $(".box").fadeOut();
    });

    return false;
  });

  
});
