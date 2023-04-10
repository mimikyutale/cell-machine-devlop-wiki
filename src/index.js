window.onload = function() {
  //目次の作成
  var toc = document.createElement('div');
  var tocHeading = document.createElement('h2');
  tocHeading.innerHTML = 'Contents';
  toc.appendChild(tocHeading);

  var tocList = document.createElement('ul');
  var headings = document.querySelectorAll('h2, h3, h4, h5, h6');

  for (var i = 0; i < headings.length; i++) {
    var heading = headings[i];

    if (heading.id === '') {
      heading.id = 'heading' + i;
    }

    var tocItem = document.createElement('li');

    //見出しの階層に応じて、空白を追加
    var tocSpace = document.createElement('span');
    var tocDepth = parseInt(heading.tagName.charAt(1)) - 2; // h2の場合、0になるように2を引く
    for (var j = 0; j < tocDepth; j++) {
      tocSpace.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;'; // 空白は4つ分追加
    }
    tocItem.appendChild(tocSpace);

    //見出しのリンクを作成
    var tocLink = document.createElement('a');
    tocLink.innerHTML = heading.innerHTML;
    tocLink.href = '#' + tocLink.innerHTML;
    tocItem.appendChild(tocLink);

    tocList.appendChild(tocItem);
    
  }

  toc.appendChild(tocList);

  // 目次をページに追加
  var tocContainer = document.getElementById('toc');
  document.body.appendChild(toc);
}
