$(document).ready(function () {
  $('.gnb').hover(
        function () {
            $('.inner_header').addClass('active');
        },
        function () {
            $('.inner_header').removeClass('active');
        }
    );
});

// header event
const header = document.querySelector(".inner_header"); // 헤더 전체 영역 (hover 상태 관리용)
const menuItems = document.querySelectorAll(".gnb > li"); // 상단 메뉴 각각 (li)
const bg = document.querySelector(".header_bg"); // 서브메뉴 배경 영역 (회색 박스)

// 각 메뉴(li)마다 이벤트 설정
menuItems.forEach((item) => {

  // 마우스 올렸을 때
  item.addEventListener("mouseenter", () => {

    // 현재 메뉴 안에 있는 서브메뉴 찾기
    const submenu = item.querySelector(".submenu");

    // 서브메뉴가 있을 때만 실행
    if (submenu) {

      // 실제 콘텐츠 높이 가져오기 (숨겨져 있어도 계산됨)
      const submenuHeight = submenu.scrollHeight;

      // 서브메뉴 높이 열기
      submenu.style.height = submenuHeight + "px";

      // 배경 높이 설정 (헤더 높이 + 여유값 포함)
      bg.style.height = submenuHeight + 150 + "px";

      // 자연스럽게 보이도록 opacity 활성화
      submenu.style.opacity = 1;
      bg.style.opacity = 1;

      // 헤더에 active 클래스 추가 (텍스트 색상 변경 등)
      header.classList.add("active");
    }
  });

  // 마우스가 메뉴에서 나갔을 때
  item.addEventListener("mouseleave", () => {

    // 다시 해당 서브메뉴 선택
    const submenu = item.querySelector(".submenu");

    if (submenu) {

      // 서브메뉴 닫기 (높이 0으로)
      submenu.style.height = "0px";

      // 투명하게 처리
      submenu.style.opacity = 0;

      //  배경도 같이 닫기
      bg.style.height = "0px";
      bg.style.opacity = 0;

      // 헤더 active 제거
      header.classList.remove("active");
    }
  });
});

// header 벗어나면 닫기
header.addEventListener('mouseleave', () => {
    gnbItems.forEach(li => {
        li.classList.remove('active');
        const sub = li.querySelector('.submenu');
        if (sub) sub.style.height = '0px';
    });

    bg.style.height = '0px';
    header.classList.remove('active');
});

(function($) {
    'use strict';

    $(function() {

        var $window = $(window),
            $container1 = $('#container1');

        /* course */
        var $course = $container1.find('.course'),
            $courseBtn = $course.find('.course_tab .course_item button'),
            $courseBtnSlickOpt = {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                autoplay: false,
                variableWidth: true,
                focusOnSelect: true,
                swipeToSlide: true,
                asNavFor: '.course_item.active .img_list',
            },
            $courseImgPrev = $course.find('.img_prev'),
            $courseImgNext = $course.find('.img_next'),
            $courseImgSlickOpt = {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: true,
                autoplay: false,
                prevArrow: $courseImgPrev,
                nextArrow: $courseImgNext,
                variableWidth: true,
                focusOnSelect: true,
                fade: true,
                asNavFor: '.course_item.active .btn_list',
            };

        $courseBtn.on('click', function(){
            var thisIdx = $(this).parent().index(),
                thisBg =  $('.course_panel .course_item').eq(thisIdx).find('.img_item').eq(0).find('img').attr('src');

            $('.course_tab').removeClass('active');
            $(this).parent().addClass('active').siblings().removeClass('active');
            $('.course_panel .btn_list').slick('unslick');
            $('.course_panel .course_item').eq(thisIdx).addClass('active').find('.btn_list').slick($courseBtnSlickOpt).on('afterChange', function(event, slick, current) {
                var _last = slick.slideCount - slick.options.slidesToShow

                if (_last === current) {
                    $('.course_btn').addClass('end');
                }else{
                    $('.course_btn').removeClass('end');
                }
            }).parents('.course_item').siblings().removeClass('active');
            $('.course_panel .img_list').slick('unslick');
            $('.course_panel .course_item').eq(thisIdx).addClass('active').find('.img_list').slick($courseImgSlickOpt).on('beforeChange', function(e, slick, current, next){
                $('.course_bg').removeClass('active');
            }).on('afterChange', function(event, slick, current){
                thisBg = $('.course_panel .course_item').eq(thisIdx).find('.img_item').eq(current).find('img').attr('src');
                $('.course_bg').addClass('active').find('.bg').attr('style','background-image:url(' + thisBg + ');');
            }).parents('.course_item').siblings().removeClass('active');
            $('.course_bg').addClass('active').find('.bg').attr('style','background-image:url(' + thisBg + ');');
        });
        $('.course_tab .course_item').eq(0).find('button').trigger('click');

        $('.course_m_btn').on('click',function(){
            $('.course_tab').addClass('active');
        });

    });
})(window.jQuery);

