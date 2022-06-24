<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
    <title>To-do List</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Dosis&family=Raleway:wght@400;600&display=swap" rel="stylesheet">
	<link href="/css/app.css" rel="stylesheet" type="text/css">
  </head>
  <body>
	<!--<h1>Some text</h1>-->
	<div class="inputSection" id="input">
		<input type="text" id="content" placeholder="Your note here">
		<button class="add" id="addButton">Add</button>
		<!--<input type="submit" class="add" id="addButton" name="db_insert" value="Add">-->
	</div>
	<!--<div>
		<ul id="list"></ul>-->
	<div class="todoList" id="list"></div>
	<script src="/js/app.js"></script>

	</body>
</html>