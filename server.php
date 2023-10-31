<?php

$json_string = file_get_contents('file.json');


$list = json_decode($json_string, true);

if(isset($_POST['task'])){
  $list[] = [
    "text" => $_POST['task'],
    "isDone" => filter_var($_POST['isDone'], FILTER_VALIDATE_BOOLEAN)
  ];
  file_put_contents('file.json', json_encode($list));
}


if(isset($_POST['itemToDelete'])){
  $itemToDelete = $_POST['itemToDelete'];
  array_splice($list, $itemToDelete, 1);
  file_put_contents('file.json', json_encode($list));
}

header('Content-Type: application/json');


echo json_encode($list);