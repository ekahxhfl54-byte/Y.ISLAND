$('.button_item').on('click', function () {
  $('.button_item').removeClass('active'); // 기존 전부 끄고
  $(this).addClass('active'); // 클릭한 것만 켜기
});
$('.course_item').on('click', function () {
  $('.course_item').removeClass('active'); // 기존 전부 끄고
  $(this).addClass('active'); // 클릭한 것만 켜기
});
$('.data_button_item').on('click', function () {
  $('.data_button_item').removeClass('active'); // 기존 전부 끄고
  $(this).addClass('active'); // 클릭한 것만 켜기
});