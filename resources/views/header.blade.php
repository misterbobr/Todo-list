<link href="/css/header.css" rel="stylesheet" type="text/css">

<header class="header">
  <div class="header-right">
    @auth
      <form action="{{ route('logout') }}" method="post">
        @csrf
        <input type="submit" class="login" id="logout-button" value="Log out"/>
      </form>
    @endauth

    @guest
      <button type="button" class="login" id="login-button">Log in</button>
      <div class="dropdown-menu">
      <form action="{{ route('login') }}" method="post">
        @csrf
        <input class="login-input" type="text" name="login" placeholder="Login"/><br>
        <input class="login-input" type="password" name="password" placeholder="Password"/><br>
        <input class="login-submit" type="submit" value="Log in"/>
      </form>
    @endguest
    </div>
  </div>
</header>