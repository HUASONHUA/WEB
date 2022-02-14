$(document).ready(function() {
    $('#burger').on('click', function(event) {
        //$(".burgerclose").click(hideHandler);
        // 忽略讓原來 <a> 標籤本身的連結功能
        event.preventDefault();
        $('body').toggleClass('burger-show');//body新增toggleclass(開關class)
        /*  如果某個類別存在，就刪除他，若不存在就新增。*/
    });
});
var burger = document.getElementById("burger");
burger.addEventListener("click", function(e){
  if(e.target.classList.contains('fa-bars')){
    e.target.classList.remove('fa-bars');
    e.target.classList.add('fa-times');
    $('body').toggleClass('burger-show', false);
  }else{
    e.target.classList.remove('fa-times');
    e.target.classList.add('fa-bars')
    $('body').toggleClass('burger-show', true);
  }
});