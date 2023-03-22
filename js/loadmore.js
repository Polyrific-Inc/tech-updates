$(function () {
  var allPosts;
  var lastPage = 6;
  var totalPosts = 0;
  var loadMoreActive = false;

  // Load the JSON file containing all URLs
  $.getJSON('/all-posts.json', function (data) {
    allPosts = data;
    totalPosts = allPosts.url.length;
    loadMoreActive = lastPage < totalPosts;

    if (loadMoreActive) {
      $(".home-load-more").show();
    } else {
      $(".home-load-more").hide();
    }
  });

  $(".home-load-more").click(function () {
    var untilPageIndex = lastPage + 5;
    if (untilPageIndex > totalPosts) {
      untilPageIndex = totalPosts;
    }

    for (var index = lastPage; index < untilPageIndex; index++) {
      var postImage = allPosts.bannerUrl[index];
      if (postImage === '') {
        postImage = 'banner_default.png';
      }

      var postUrl = allPosts.url[index];
      var postWeek = allPosts.week[index];
      var postDate = allPosts.date[index];
      var postDateDate = new Date(postDate).toLocaleString('en-us', { day: 'numeric' });
      var postDateMonth = new Date(postDate).toLocaleString('en-us', { month: 'short' });
      var postDateYear = new Date(postDate).toLocaleString('en-us', { year: 'numeric' });
      var postDateFormat = postDateMonth + " " + postDateDate + ", " + postDateYear;
      var postTitle = allPosts.title[index];
      var postBriefDesc = allPosts.briefDescription[index];
      var newDiv = "<a href='" + postUrl + "'> \
                      <div class='home-post'> \
                        <div class='home-post-image'> \
                          <img src='/assets/images/" + postImage + "' alt='banner'> \
                        </div> \
                        <div class='home-post-detail'> \
                          <div class='home-post-detail-header'>" + postWeek + " · " + postDateFormat + "</div> \
                          <div class='home-post-detail-title'>" + postTitle + "</div> \
                          <div class='home-post-detail-description'>" + postBriefDesc + "</div> \
                        </div> \
                      </div> \
                    </a>";
      $(newDiv).appendTo('.home-posts')
    }

    lastPage = lastPage + 5;
    loadMoreActive = lastPage < totalPosts;

    if (loadMoreActive) {
      $(".home-load-more").show();
    } else {
      $(".home-load-more").hide();
    }
  });
});