-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 08 2023 г., 19:00
-- Версия сервера: 10.4.19-MariaDB
-- Версия PHP: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `goody-teeth`
--

-- --------------------------------------------------------

--
-- Структура таблицы `managemeta`
--

CREATE TABLE `managemeta` (
  `id` int(11) NOT NULL,
  `meta_key` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `managemeta`
--

INSERT INTO `managemeta` (`id`, `meta_key`, `meta_value`, `user_id`) VALUES
(3, 'clinic', '{\"name\":\"wefliwj22\",\"startTime\":\"20:57\",\"endTime\":\"20:57\"}', 1),
(4, 'clinic', '{\"name\":\"hjhjvjcv\",\"startTime\":\"22:22\",\"endTime\":\"21:22\"}', 1),
(5, 'clinic', '{\"name\":\"ijjji\",\"startTime\":\"05:55\",\"endTime\":\"05:55\"}', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `happy` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `email`, `name`, `pass`, `happy`, `data`, `phone`, `type`, `status`, `level`) VALUES
(1, 'crazy-fog', 'teenitclub@gmail.com', 'Melnykov Pavlo ', 'd34336bb884e0be8429521752bfbf935', '1995-05-24', '{\"name\":\"Pavlo\",\"surname\":\"Melnykov\",\"secondName\":\"\",\"bio\":\"\",\"work\":\"admin\",\"sex\":\"man\",\"dateRegister\":\"2023-03-16 20:26:46\"}', '0932080760', 'fog', 'true', '{\"type\":\"fog\"}'),
(4, 'crazy-dog', 'testes@gmail.com', 'User Testes ', 'd34336bb884e0be8429521752bfbf935', '1995-05-24', '{\"name\":\"Testes\",\"surname\":\"User\",\"secondName\":\"\",\"bio\":\"\",\"work\":\"admin\",\"sex\":\"man\",\"dateRegister\":\"2023-03-16 20:34:29\"}', '0932080761', 'false', 'false', '{\"type\":\"not-level\"}'),
(5, 'clicker', 'clicker@g.com', 'Мельников Павло ', 'd34336bb884e0be8429521752bfbf935', '2023-05-10', '{\"name\":\"Павло\",\"surname\":\"Мельников\",\"secondName\":\"\",\"bio\":\"\",\"work\":\"Зуб допомога\",\"sex\":\"0\",\"dateRegister\":\"2023-05-13 11:26:39\"}', '0998585857', 'false', 'false', '{\"type\":\"not-level\"}');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `managemeta`
--
ALTER TABLE `managemeta`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `managemeta`
--
ALTER TABLE `managemeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
