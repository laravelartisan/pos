<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>POS | {{ $title or '' }}</title>

    <!-- Font awesome -->
    <link href="{{ asset('assets/frontend/css/font-awesome.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend.min.css') }}" rel="stylesheet">

    <link id="switcher" href="{{ asset('assets/frontend/css/theme-color/default-theme.css') }}" rel="stylesheet">


    <!-- Main style sheet -->
    <link href="{{ asset('assets/frontend/css/style.css') }}" rel="stylesheet">

    <!-- Google Font -->
    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  

  </head>
  <body> 
   <!-- wpf loader Two -->
    <div id="wpf-loader-two">          
      <div class="wpf-loader-two-inner">
        <span>Loading</span>
      </div>
    </div> 
    <!-- / wpf loader Two -->       
  <!-- SCROLL TOP BUTTON -->
    <a class="scrollToTop" href="#"><i class="fa fa-chevron-up"></i></a>
  <!-- END SCROLL TOP BUTTON -->

<div id="pizza">
    <pizza-header></pizza-header>

    <pizza-menu></pizza-menu>

    @yield('contents')
    {{ $slot }}

    <pizza-footer></pizza-footer>


</div>


  <!-- Login Modal -->  
  <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">                      
        <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4>Login or Register</h4>
          <form class="aa-login-form" action="">
            <label for="">Username or Email address<span>*</span></label>
            <input type="text" placeholder="Username or email">
            <label for="">Password<span>*</span></label>
            <input type="password" placeholder="Password">
            <button class="aa-browse-btn" type="submit">Login</button>
            <label for="rememberme" class="rememberme"><input type="checkbox" id="rememberme"> Remember me </label>
            <p class="aa-lost-password"><a href="#">Lost your password?</a></p>
            <div class="aa-register-now">
              Don't have an account?<a href="account.html">Register now!</a>
            </div>
          </form>
        </div>                        
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div>    


   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
   <script src="/assets/frontend/js/bootstrap.js"></script>
   <script src="/assets/frontend/js/jquery.smartmenus.js"></script>
   <script src="/assets/frontend/js/jquery.smartmenus.bootstrap.js"></script>
   <script src="/assets/frontend/js/jquery.simpleGallery.js"></script>
   <script src="/assets/frontend/js/jquery.simpleLens.js"></script>
   <script src="/assets/frontend/js/slick.js"></script>
   <script src="/assets/frontend/js/nouislider.js"></script>
   <script src="/assets/frontend/js/custom.js"></script>

   {{ $script }}
   <script src="{{ asset('js/app-frontend.js') }}" type="text/javascript"></script>
  @yield('scripts')

  </body>
</html>