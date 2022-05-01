'<?php
  $name = $_POST['player_name'];
  $phone = $_POST['phone_number'];
  $hall = $_POST['callbackbookingtype'];
  $timePeriod = $_POST['callbackwhen'];
  $timeDuration = $_POST['callbacktime'];

  $people_count = $_POST['callbackpeoples'];

  $token = "5381960052:AAHBE9ZJOzJimDAXsXLpZE-VX9veIHk55Dg"; 
  $chat_id = "453661544"; //суда свой chat_id
  $arr = array(
    'Имя игрока: ' => $name,
    'Телефон: ' => $phone,
    'Зал: ' => $hall,
    'Количество игроков: ' => $people_count,
    'Время игры: ' => $timeDuration,
    'Период игры: ' => $timePeriod,
  );

  foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
 
  if ($sendToTelegram) {
    header('Location: price.html');
  } else {
    echo "Error";
  }
  ?>`