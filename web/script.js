// 全站脚本：导航高亮 + 图片灯箱
document.addEventListener('DOMContentLoaded', function () {
  // 当前页导航高亮
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var target = a.getAttribute('href').split('/').pop();
    if (target === page) a.classList.add('active');
  });

  // 图片灯箱：给需要放大的图片加 data-zoom 属性
  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img alt="预览大图">';
  document.body.appendChild(lightbox);

  document.querySelectorAll('[data-zoom]').forEach(function (img) {
    img.addEventListener('click', function () {
      lightbox.querySelector('img').src = img.src;
      lightbox.classList.add('show');
    });
  });

  lightbox.addEventListener('click', function () {
    lightbox.classList.remove('show');
  });
});
