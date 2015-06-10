/*請貼上fackbook初始化的相關程式碼*/
/*https://developers.facebook.com/*/
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '655372501230961',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
