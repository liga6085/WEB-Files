window.onscroll = function() {
  barFunction()
};

function barFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.getElementById('bar').style.width = scrolled + '%';
}
