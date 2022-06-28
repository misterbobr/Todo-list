<div>
    <form action="{{ route('register') }}" method="post">
        @csrf
        <input class="register-input" type="text" name="login" placeholder="Login"><br>
        <input class="register-input" type="password" name="password" placeholder="Password"><br>
        <input class="register-input" type="password" name="password_confirmation" placeholder="Confirm password"><br>
        <input class="register-submit" type="submit" value="Register"/>
    </form>
</div>