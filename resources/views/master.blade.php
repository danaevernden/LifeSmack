<!doctype html>
<html>
  <head>
    @if(Session::get('flash_message') != null))
        <div class='flash_message'>{{ Session::get('flash_message') }}</div>
    @endif
      <meta charset='utf-8' />
      <link href='/css/style.css' type='text/css' property='stylesheet' rel='stylesheet'>
      <link href='/css/PrinsesstartaBoldDEMO.ttf' type='text/css' property='stylesheet' rel='stylesheet'>
    <!--  <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' property='stylesheet' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Pacifico' property='stylesheet' rel='stylesheet' type='text/css'>
      <link rel="shortcut icon" href="/images/favicon.ico">
-->
      <link rel="stylesheet" href="css/animate.css">

      <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
      <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
      <script type='text/javascript' src='/js/functions.js'> </script>
      <title>LifeSmack</title>
    </head>
    <body>
      <header>
        <div class="titlemain">
        </div>
        <div class="nav">
            <a href='/join' class="nav2" class="hvr-underline-from-left">
              Stats Here
            </a>
              -
              <a href='/'>
              <img src="/images/LogoSmallCondensed.jpg" class="logo">
            </a>
            -
             <a href="/account" class ="nav2" class="hvr-underline-from-left">My Account</a>
          <!--
              <a href="/about">How it works</a>
               -
               <a href="/">LifeSmack</a>
               -
              <a href="/join">Join Now</a>
     -->
    </div>
      @yield('banner')
    </header>
    @yield('header')
        <div class="content2">
            @yield('content')
        </div>
        <footer>
            @yield('footer')
        </footer>


  </body>

</html>


<!--    <a href="/newsfeed">News Feed</a>
    -
    <a href="/SmackIt">Smacks</a>
            <a href="/goaltemplates">Goal Templates</a>
  -->
