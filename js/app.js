//Add loader for intial state
$(document).load(function() {
  $('#popUp').addClass('loader');
});

$(document).ready(function() {
  $('#popUp').removeClass('loader');
})

const url = 'https://newsapi.org/v2/top-headlines';

$.get(url, {
    country: 'us',
    category: 'sports',
    apiKey: 'dd591ea74bd0486ea58d22ea637a0b4e',
    pageSize: '5'
}, function(data) {
  parseData(data);
  console.log(data);
});

function parseData(data) {
  for(let i=0; i < data.articles.length; i++) {
    console.log(data.articles);
    let $articleTitle = data.articles[i].title;
    let $articlePublished = data.articles[i].publishedAt;
    let $imageUrl = data.articles[i].urlToImage || 'profile.png';
    let $articleDescription = data.articles[i].description;
    let $articleUrl = data.articles[i].url;
    let article = `<article class="article" data-title="${$articleTitle}" data-description="${$articleDescription}" data-url="${$articleUrl}">
      <section class="featuredImage">
        <img src="${$imageUrl}" alt="" />
      </section>
      <section class="articleContent">
          <a href="#"><h3>${$articleTitle}</h3></a>
          <h6>${$articlePublished}</h6>
      </section>
      <section class="impressions">
        526
      </section>
      <div class="clearfix"></div>
      </article>`
      appendArticle(article);
  }
}

$('#main').on('click', '.article', function() {
  $('#popUp').removeClass('hidden');
  $('#popUp').removeClass('loader');
  $('#modal-content h1').append($(this).data('title'));
  $('#modal-content p').append($(this).data('description'));
  $('#modal-content a').attr("href", $(this).data('url'));
});

function appendArticle(article) {
  $('#main').append(article);
}

$('#main').on('click', '.article', function() {
  $('#popUp').removeClass('hidden');
  $('#popUp').removeClass('loader');
});

// Hiding article when clicking "X" button
$('.closePopUp').on('click', function() {
  $('#popUp').addClass('hidden');
})

// //Add loader for intial state
// $(document).load(function() {
//   $('#popUp').removeClass('loader');
// });


