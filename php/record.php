$tg_user = '453661544'; // id пользователя, для отправки сообщения
$bot_token = '5381960052:AAHBE9ZJOzJimDAXsXLpZE-VX9veIHk55Dg'; // токен бота
  
$text = "Первая строка сообщения со ссылкой \n Вторая строка с жирным текстом";
  
// параметры, которые отправятся в api телеграм
$params = array(
    'chat_id' => $tg_user, // id получателя
    'text' => $text, // текст сообщения
    'parse_mode' => 'HTML', // режим отображения сообщения HTML (не все HTML теги работают)
);
  
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'.$bot_token.'/sendMessage'); // адрес вызова api функции телеграм
curl_setopt($curl, CURLOPT_POST, true); // отправка методом POST
curl_setopt($curl, CURLOPT_TIMEOUT, 10); // время выполнения запроса
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION , true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $params); // параметры запроса
$result = curl_exec($curl); // запрос к api
curl_close($curl);
  
var_dump(json_decode($result));