/**
 * @preserve popular-pages.js
 *
 * LICENSE: http://hail2u.mit-license.org/2013
 */
!function(){var a=document.getElementById("popular-pages");if(a){window.displayPopularPages=function(b){function c(a){var b=document.createElement("a");return b.appendChild(document.createTextNode(a)),b.innerHTML}var d=["<h1>人気のあるページ</h1>"];if(void 0===b||null===b.query.results)return d.push('<p class="message-error">データを取得できませんでした。</p>'),void(a.innerHTML=d.join(""));var e=b.query.results.item;d.push("<ol>");for(var f=0,g=10;g>f;f++){var h=e[f];d.push("<li>",'<a href="'+c(h.link)+'">',c(h.title.replace(/^hail2u\.net - Weblog - /,"").replace(/ - Weblog - hail2u\.net$/,"")),"</a>","</li>")}d.push("</ol>",'<nav class="seemore">','<p><a href="http://b.hatena.ne.jp/entrylist?sort=count&amp;url=http%3A%2F%2Fhail2u.net%2F">もっと見る\n</a></p>',"</nav>"),a.innerHTML=d.join(""),delete window.displayPopularPages};var b=document.createElement("script"),c=document.getElementsByTagName("script")[0];b.async=!0,b.src='http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feed%20where%20url%3D"http%3A%2F%2Fb.hatena.ne.jp%2Fentrylist%3Fsort%3Dcount%26url%3Dhttp%253A%252F%252Fhail2u.net%252F%26mode%3Drss"&format=json&callback=displayPopularPages',c.parentNode.insertBefore(b,c)}}();
//
//# sourceMappingURL=search.js.map