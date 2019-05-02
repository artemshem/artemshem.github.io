<?php

$recepient = 'artemshem1@rambler.ru';
$sitename = 'example site';

$name = trim($_POST['name']);
$number = trim($_POST['number']);
$email = trim($_POST['email']);
$text = trim($_POST['text']);
$message = 'Имя: $name \nТелефон: $number \nАдрес: $email \nТекст: $text';

$pageTitle = 'Новая заявка с сайта \"$sitename\"';
mail($recepient,$pageTitle,$message,'Content-type: text/plain; charset=\"utf-8\"\n From:$recepient');

?>
