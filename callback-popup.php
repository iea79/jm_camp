<?php
	$error = '';
	$minCharLength = 3;
	$maxCharLength = 30;

	$to  = '<info@jm-school.ru>';
	$url = $_SERVER['HTTP_HOST'];
	$headers = 'Content-type: text/html; charset=utf-8';
	$message = '';

	if (!empty($_POST['name']) && !empty($_POST['tel'])) {
		$subject = $_POST['subject'];
		
		$name = trim(htmlspecialchars($_POST['name']));
		// $email = trim(htmlspecialchars($_POST['email']));
		$tel = trim(htmlspecialchars($_POST['tel']));
		
		// Проверка имени
		if (strlen($name) < $minCharLength) {
			$error .= 'Длина имени не менее ' . $minCharLength . ' символов' . '<br>';
		} else if (strlen($name) > $maxCharLength) {
			$error .= 'Длина имени не более ' . $maxCharLength . ' символов' . '<br>';
		}

		// Проверка телефона
		if (!preg_match('/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/', $tel)) {
			$error .= 'Введите корректный телефонный номер' . "\r\n";
		}

		// Проверка email
		// if(!preg_match('/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i', $email)) {
		// 	$error .= 'Введите корректный email' . "\r\n";
		// }

		if (!$error) {			
			$message .= '<p>Имя: ' . $name . '</p>';
			// $message .= '<p>Email: ' . $email . '</p>';
			$message .= '<p>Телефон: ' . $tel . '</p>';
			

			if (mail($to, '=?utf-8?B?'. base64_encode($subject).'?=', $message, $headers)) {
				echo 'Ваша заявка отправлена!';
			}
		} else {
			echo $error;
		}
	} else {
		echo 'Необходимо заполнить поля: Имя, Телефон';
	}