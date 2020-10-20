DROP DATABASE IF EXISTS  test;
create database test;
use test;
DROP TABLE IF EXISTS  `task`;
CREATE TABLE `task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `status_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned,
  PRIMARY KEY (`id`)
) ;
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (1, 'Wash clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2, 1);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (2, 'Become a billionaire', 'This should not take long, just invent a time machine, travel back to 2010 and buy bitcoin', '2017-09-26 03:06:46', '2017-10-08 06:14:31', '2017-12-22 20:58:03', 3, 6);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (3, 'Plan meeting with London office', 'We will probably use skype', '2017-10-04 18:07:37', '2017-10-14 16:01:31', '2017-12-05 19:42:15', 2, 8);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (4, 'Order groceries online', 'The fridge is almost empty, we need eggs and milk', '2017-09-20 19:34:43', '2017-10-15 23:35:45', '2017-12-24 16:00:46', 1, 1);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (5, 'Empty the mailbox', NULL, '2017-09-27 15:17:08', '2017-10-08 17:31:16', null, 2, 9);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (6, 'Fix the flat tire on the bike', 'Tools are in the garage', '2017-09-13 23:16:30', '2017-10-06 04:03:52', '2017-12-07 11:51:11', 2, 6);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (7, 'Wash the car', NULL, '2017-10-06 19:39:16', '2017-10-03 04:49:05', '2017-12-04 17:43:16', 2, 10);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (8, 'Walk the dog', NULL, '2017-09-03 02:47:17', '2017-10-12 18:40:08', null, 3, 2);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (9, 'Write a book', 'Maybe something about dragons?', '2017-10-11 06:14:01', '2017-10-17 12:19:08', '2017-12-21 20:18:05', 2, 6);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (10, 'Do HackYourFuture homework', NULL, '2017-10-04 13:55:16', '2017-10-10 00:18:05', '2017-12-19 17:01:10', 1, 3);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (11, 'Iron shirts', NULL, '2017-09-23 03:59:58', '2017-10-19 08:30:48', '2017-12-08 11:00:35', 3, 9);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (12, 'Water the potted plants', 'Maybe they need fertilizer as well', '2017-09-29 23:38:42', '2017-10-08 04:24:53', null, 2, 1);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (13, 'Buy wine for the birthday party', 'Both red and white wine', '2017-10-10 14:57:22', '2017-10-14 14:03:30', '2017-12-10 23:43:56', 2, 5);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (14, 'Buy gift for Paul', 'He could use a shirt or a tie and some socks', '2017-09-09 05:22:08', '2017-10-17 15:58:05', '2017-12-04 20:45:18', 3, 3);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (15, 'Change lightbulb in hallway', 'Should be an LED bulb', '2017-10-01 19:07:35', '2017-10-03 10:02:27', '2017-12-08 17:09:03', 3, 10);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (16, 'Wash windows', NULL, '2017-10-02 22:15:17', '2017-10-07 22:31:35', '2017-12-06 03:36:09', 2, 8);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (17, 'Setup salary databases for accounting', 'Use MySQL', '2017-10-25 05:35:33', '2017-10-10 23:22:33', '2017-12-05 00:19:08', 1, 9);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (18, 'Learn how databases work', NULL, '2017-09-06 03:16:47', '2017-10-10 16:56:58', '2017-12-18 05:08:05', 3, 5);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (19, 'Make the databases perform better', 'It should be possible to optimize the indexes', '2017-10-03 09:27:20', '2017-10-01 16:27:46', '2017-12-01 13:28:35', 2, 4);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (20, 'Buy beer for the company party', '2 or 3 cases should be enough', '2017-10-08 01:39:02', '2017-10-13 23:07:41', null, 3, 4);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (21, 'Knit sweater', NULL, '2017-09-22 17:14:55', '2017-10-08 09:01:35', '2017-12-15 20:33:57', 2, 9);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (22, 'Charge electric bicycle', 'It sucks to ride it without a battery!', '2017-10-10 12:25:07', '2017-10-07 21:45:01', '2017-12-10 19:02:17', 1, 7);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (23, 'Buy new phone', 'The battery in the current one only lasts 5 hours 😞', '2017-09-17 00:25:34', '2017-10-09 11:48:12', null, 3, NULL);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (24, 'Ride bike aroud Sjælland', 'Remember rainclothes and tire repair kit!', '2017-10-20 19:21:13', '2017-10-07 01:38:06', '2017-12-19 15:08:18', 2, 7);

UPDATE `task`
SET `title` = 'car is clean' 
WHERE (`id` = '7');
UPDATE `task`
SET `status_id` = '3' 
WHERE
(`title` like '%write a book%');
UPDATE `task` 
SET `status_id` = '1'
WHERE (`id` = '4');
UPDATE `task` 
SET `status_id` = '3'
WHERE (`created` = '2017-10-25 06:54:16');
DELETE FROM task
WHERE (`id` = '17');
select * from task;


