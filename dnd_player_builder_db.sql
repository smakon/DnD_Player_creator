-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Дек 15 2024 г., 11:48
-- Версия сервера: 8.0.25-15
-- Версия PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `dnd_player_builder`
--

-- --------------------------------------------------------

--
-- Структура таблицы `characters`
--

CREATE TABLE `characters` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `level` int NOT NULL DEFAULT '0',
  `race` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'human',
  `class` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'paladin',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Untitled',
  `hp` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0;0',
  `create_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `characters`
--

INSERT INTO `characters` (`id`, `user_id`, `level`, `race`, `class`, `name`, `hp`, `create_date`) VALUES
(1, 48, 1500, 'elf', 'monk', 'Sasun', '10;10', '2024-12-14'),
(2, 48, 0, 'elf', 'bard', 'test', '0;0', '2024-12-14'),
(3, 48, 0, 'dwarf', 'bard', 'Untitled', '0;0', '2024-12-15'),
(4, 48, 0, 'human', 'paladin', 'Untitled', '0;0', '2024-12-15'),
(5, 48, 0, 'human', 'paladin', 'Untitled', '0;0', '2024-12-15'),
(6, 49, 0, 'human', 'paladin', 'Untitled', '0;0', '2024-12-15'),
(7, 49, 0, 'human', 'paladin', 'Untitled', '0;0', '2024-12-15'),
(8, 51, 0, 'human', 'paladin', 'Untitled', '0;0', '2024-12-15'),
(9, 52, 1400, 'half-elf', 'cleric', 'Rudolf', '10;10', '2024-12-15');

-- --------------------------------------------------------

--
-- Структура таблицы `character_info`
--

CREATE TABLE `character_info` (
  `id` bigint NOT NULL,
  `character_id` int NOT NULL,
  `character_secondary_info_id` bigint NOT NULL,
  `character_money_id` bigint NOT NULL,
  `character_modify_id` bigint NOT NULL,
  `character_skills_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `character_info`
--

INSERT INTO `character_info` (`id`, `character_id`, `character_secondary_info_id`, `character_money_id`, `character_modify_id`, `character_skills_id`) VALUES
(1, 1, 1, 1, 1, 1),
(2, 2, 2, 2, 2, 2),
(3, 3, 3, 3, 3, 3),
(4, 4, 4, 4, 4, 4),
(5, 5, 5, 5, 5, 5),
(6, 6, 6, 6, 6, 6),
(7, 7, 7, 7, 7, 7),
(8, 8, 8, 8, 8, 8),
(9, 9, 9, 9, 9, 9);

-- --------------------------------------------------------

--
-- Структура таблицы `character_modify`
--

CREATE TABLE `character_modify` (
  `id` bigint NOT NULL,
  `Strength` int NOT NULL DEFAULT '8',
  `Dexterity` int NOT NULL DEFAULT '8',
  `Intelligence` int NOT NULL DEFAULT '8',
  `Wisdom` int NOT NULL DEFAULT '8',
  `Charisma` int NOT NULL DEFAULT '8',
  `Physique` int NOT NULL DEFAULT '8'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `character_modify`
--

INSERT INTO `character_modify` (`id`, `Strength`, `Dexterity`, `Intelligence`, `Wisdom`, `Charisma`, `Physique`) VALUES
(1, 16, 16, 15, 13, 13, 11),
(2, 0, 0, 0, 0, 0, 0),
(3, 0, 0, 0, 0, 0, 0),
(4, 0, 0, 0, 0, 0, 0),
(5, 0, 0, 0, 0, 0, 0),
(6, 0, 0, 0, 0, 0, 0),
(7, 0, 0, 0, 0, 0, 0),
(8, 0, 0, 0, 12, 0, 0),
(9, 15, 0, 8, 13, 7, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `character_money`
--

CREATE TABLE `character_money` (
  `id` bigint NOT NULL,
  `golden_coin` bigint NOT NULL DEFAULT '0',
  `copper_coin` bigint NOT NULL DEFAULT '0',
  `silver_coin` bigint NOT NULL DEFAULT '0',
  `platinum_coin` bigint NOT NULL DEFAULT '0',
  `electrum_coin` bigint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `character_money`
--

INSERT INTO `character_money` (`id`, `golden_coin`, `copper_coin`, `silver_coin`, `platinum_coin`, `electrum_coin`) VALUES
(1, 1, 0, 0, 0, 0),
(2, 0, 0, 0, 0, 0),
(3, 0, 0, 0, 0, 0),
(4, 0, 0, 0, 0, 0),
(5, 0, 0, 0, 0, 0),
(6, 0, 0, 0, 0, 0),
(7, 0, 0, 0, 0, 0),
(8, 0, 0, 0, 0, 0),
(9, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `character_secondary_info`
--

CREATE TABLE `character_secondary_info` (
  `id` bigint NOT NULL,
  `speed` int NOT NULL DEFAULT '0',
  `armor` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `character_secondary_info`
--

INSERT INTO `character_secondary_info` (`id`, `speed`, `armor`) VALUES
(1, 80, 10),
(2, 0, 0),
(3, 0, 0),
(4, 0, 0),
(5, 0, 0),
(6, 0, 0),
(7, 0, 0),
(8, 0, 0),
(9, 20, 18);

-- --------------------------------------------------------

--
-- Структура таблицы `character_skills`
--

CREATE TABLE `character_skills` (
  `id` bigint NOT NULL,
  `skills` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '{"Athletics":{"addiction":"Strength","state":0,"bonus":0},"Acrobatics":{"addiction":"Dexterity","state":0,"bonus":0},"Sleight of Hand": {"addiction":"Dexterity","state":0,"bonus":0},"Stealth":{"addiction":"Dexterity","state":0,"bonus":0},"Analysis":{"addiction":"Intelligence","state":0,"bonus":0},"History":{"addiction":"Intelligence","state":0,"bonus":0},"Magic":{"addiction":"Intelligence","state":0,"bonus":0},"Nature":{"addiction":"Intelligence","state":0,"bonus":0},"Religion":{"addiction":"Intelligence","state":0,"bonus":0},"Perception":{"addiction":"Wisdom","state":0,"bonus":0},"Survival":{"addiction":"Wisdom","state":0,"bonus":0},"Medicine":{"addiction":"Wisdom","state":0,"bonus":0},"Insight":{"addiction":"Wisdom","state":0,"bonus":0},"Animal Care":{"addiction":"Wisdom","state":0,"bonus":0},"Performance":{"addiction":"Charisma ","state":0,"bonus":0},"Intimidation":{"addiction":"Charisma","state":0,"bonus":0},"Belief":{"addiction":"Charisma","state":0,"bonus":0}}'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `character_skills`
--

INSERT INTO `character_skills` (`id`, `skills`) VALUES
(1, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":0,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":1},\"Sleight of Hand\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":1},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":1,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":1},\"History\":{\"addiction\":\"Intelligence\",\"state\":1,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":1},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":1,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":1},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":1,\"bonus\":2},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":3,\"bonus\":3},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":1,\"bonus\":1},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":1,\"bonus\":1},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":1},\"Performance\":{\"addiction\":\"Charisma \",\"state\":1,\"bonus\":2},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":1,\"bonus\":2},\"Belief\":{\"addiction\":\"Charisma\",\"state\":2,\"bonus\":1}}'),
(2, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":0,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Sleight of Hand\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"History\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Performance\":{\"addiction\":\"Charisma \",\"state\":0,\"bonus\":0},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0},\"Belief\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0}}'),
(3, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":0,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Sleight of Hand\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"History\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Performance\":{\"addiction\":\"Charisma \",\"state\":0,\"bonus\":0},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0},\"Belief\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0}}'),
(4, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":0,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Sleight of Hand\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"History\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Performance\":{\"addiction\":\"Charisma \",\"state\":0,\"bonus\":0},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0},\"Belief\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0}}'),
(5, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":0,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Sleight of Hand\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"History\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Performance\":{\"addiction\":\"Charisma \",\"state\":0,\"bonus\":0},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0},\"Belief\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0}}'),
(6, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":0,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Sleight of Hand\": {\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"History\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Performance\":{\"addiction\":\"Charisma \",\"state\":0,\"bonus\":0},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0},\"Belief\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0}}'),
(7, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":0,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Sleight of Hand\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"History\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Performance\":{\"addiction\":\"Charisma \",\"state\":0,\"bonus\":0},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0},\"Belief\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0}}'),
(8, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":0,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Sleight of Hand\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"History\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":1,\"bonus\":1},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Performance\":{\"addiction\":\"Charisma \",\"state\":1,\"bonus\":1},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0},\"Belief\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0}}'),
(9, '{\"Athletics\":{\"addiction\":\"Strength\",\"state\":1,\"bonus\":0},\"Acrobatics\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Sleight of Hand\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Stealth\":{\"addiction\":\"Dexterity\",\"state\":0,\"bonus\":0},\"Analysis\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"History\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Magic\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Nature\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Religion\":{\"addiction\":\"Intelligence\",\"state\":0,\"bonus\":0},\"Perception\":{\"addiction\":\"Wisdom\",\"state\":1,\"bonus\":0},\"Survival\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Medicine\":{\"addiction\":\"Wisdom\",\"state\":1,\"bonus\":2},\"Insight\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Animal Care\":{\"addiction\":\"Wisdom\",\"state\":0,\"bonus\":0},\"Performance\":{\"addiction\":\"Charisma \",\"state\":1,\"bonus\":0},\"Intimidation\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0},\"Belief\":{\"addiction\":\"Charisma\",\"state\":0,\"bonus\":0}}');

-- --------------------------------------------------------

--
-- Структура таблицы `magic_spell_book`
--

CREATE TABLE `magic_spell_book` (
  `id` int NOT NULL,
  `name` varchar(500) NOT NULL,
  `type` varchar(255) NOT NULL,
  `time_to_create` varchar(200) NOT NULL,
  `distance` varchar(50) NOT NULL,
  `duration` varchar(200) NOT NULL,
  `components` varchar(200) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `can_use` varchar(600) NOT NULL,
  `dice` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `magic_spell_book`
--

INSERT INTO `magic_spell_book` (`id`, `name`, `type`, `time_to_create`, `distance`, `duration`, `components`, `description`, `can_use`, `dice`) VALUES
(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(46, 'Samik', '$2a$10$p2qFUs3NsSiB4qhHzK2NLOimxX5DZYeQxPZfOBDZdAVPuUxPYksku'),
(47, 'test', '$2a$10$edo1o1W994vIZYzMev.zAOBbVQcLHZ1urMUDR3KHM7tKrW8l6NZqO'),
(48, 'test2', '$2a$10$7KLHdqFveXQgOsX4P7Zy2e4jbLNU2EtMsDBGU1W6XTp.kkZ65eXwK'),
(49, 'Samvel', '$2a$10$5raYj/5xHHi.Jjg.Kw1OyugVrfZGrpwrbopiftqCPu8li/Q7gkiG2'),
(50, 'Samvel2', '$2a$10$ROHrFl78Y7g.nz9YyAgOrOdzGlm5LeYhlJtgkkDPu6JGn4Xz14SVe'),
(51, 'Sasmik', '$2a$10$b8nspIUUG/zs2eaDGpJNQOonIU/FkWxYRcFWvp3f.03l9s4GIviU6'),
(52, 'Sany', '$2a$10$80auFvxnAlhYi74Kr.s0geGjMcqM2dneydDfqbl.KqJig0U0jKepq');

-- --------------------------------------------------------

--
-- Структура таблицы `user_data`
--

CREATE TABLE `user_data` (
  `user_id` int NOT NULL,
  `theme` tinyint NOT NULL DEFAULT '0',
  `vibration` tinyint NOT NULL DEFAULT '1',
  `language` varchar(15) NOT NULL DEFAULT 'ru',
  `dice_count` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `user_data`
--

INSERT INTO `user_data` (`user_id`, `theme`, `vibration`, `language`, `dice_count`) VALUES
(46, 0, 0, 'ru', 0),
(47, 0, 1, 'ru', 0),
(48, 0, 30, 'ru', 0),
(49, 0, 1, 'ru', 0),
(50, 0, 1, 'ru', 0),
(51, 0, 1, 'ru', 3),
(52, 0, 1, 'ru', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `user_ms_book`
--

CREATE TABLE `user_ms_book` (
  `user_id` int NOT NULL,
  `magic_spell_book_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `character_info`
--
ALTER TABLE `character_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `character_id` (`character_id`),
  ADD KEY `character_secondary_info_id` (`character_secondary_info_id`),
  ADD KEY `character_mony_id` (`character_money_id`),
  ADD KEY `character_modify_id` (`character_modify_id`),
  ADD KEY `character_skills_id` (`character_skills_id`);

--
-- Индексы таблицы `character_modify`
--
ALTER TABLE `character_modify`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `character_money`
--
ALTER TABLE `character_money`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `character_secondary_info`
--
ALTER TABLE `character_secondary_info`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `character_skills`
--
ALTER TABLE `character_skills`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `magic_spell_book`
--
ALTER TABLE `magic_spell_book`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_data`
--
ALTER TABLE `user_data`
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `user_ms_book`
--
ALTER TABLE `user_ms_book`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `magic_spell_book_id` (`magic_spell_book_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `character_info`
--
ALTER TABLE `character_info`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `character_modify`
--
ALTER TABLE `character_modify`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `character_money`
--
ALTER TABLE `character_money`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `character_secondary_info`
--
ALTER TABLE `character_secondary_info`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `character_skills`
--
ALTER TABLE `character_skills`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `magic_spell_book`
--
ALTER TABLE `magic_spell_book`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `character_info`
--
ALTER TABLE `character_info`
  ADD CONSTRAINT `character_id` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `character_modify_id` FOREIGN KEY (`character_modify_id`) REFERENCES `character_modify` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `character_mony_id` FOREIGN KEY (`character_money_id`) REFERENCES `character_money` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `character_secondary_info_id` FOREIGN KEY (`character_secondary_info_id`) REFERENCES `character_secondary_info` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `character_skills_id` FOREIGN KEY (`character_skills_id`) REFERENCES `character_skills` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `user_data`
--
ALTER TABLE `user_data`
  ADD CONSTRAINT `user_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `user_ms_book`
--
ALTER TABLE `user_ms_book`
  ADD CONSTRAINT `user_ms_book_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_ms_book_ibfk_2` FOREIGN KEY (`magic_spell_book_id`) REFERENCES `magic_spell_book` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
