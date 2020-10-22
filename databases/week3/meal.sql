DROP DATABASE IF EXISTS  `mealplan`;
CREATE DATABASE `mealplan`;
USE `mealplan`;
DROP TABLE IF EXISTS `Meal`;
CREATE TABLE Meal(
  `id` int  NOT NULL AUTO_INCREMENT,
 `title` varchar(40) NOT NULL,
 `description` text ,
 `location` varchar(40) NOT NULL,
 `when` datetime,
 `max_reservations` int NOT NULL,
 `price` decimal NOT NULL,
 `created_date` date,
 primary key(`id`)
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
DROP TABLE IF EXISTS `reservation`;
CREATE TABLE `reservation`(
 `id` int  NOT NULL AUTO_INCREMENT, 
 `number_of_guests` int NOT NULL,
 `meal_id` int NOT NULL,
 `created_date` date,
 `contact_phonenumber` varchar(40) NOT NULL,
 `contact_name` varchar(100) NOT NULL,
 `contact_email` varchar(40),
 primary key(`id`),
 CONSTRAINT `Reservation_ibfk_1` FOREIGN KEY reservation(`meal_id`) REFERENCES Meal(`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
 
DROP TABLE IF EXISTS `Review`;
CREATE TABLE `Review`(
 `id` int NOT NULL AUTO_INCREMENT,
 `title` varchar(40) NOT NULL,
 `description` text,
 `meal_id` int NOT NULL,
 `stars` int,
 `created_date` date,
 primary key(`id`),
 FOREIGN KEY `Review`(`meal_id`) REFERENCES `Meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


-----------------------------------------------------------------

INSERT INTO `mealplan`.`Meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES(1,'paneer pulao','made with rice and cotted cheese','valby copenhagen','2020-10-30 13:23:44',8,'70.00','2020-10-10');
INSERT INTO `mealplan`.`Meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES(2,'butter chicken','chicken grevy made with tomatoes,butter,cashew nuts','soborg copenhagen','2020-11-05 19:30:30',6,'100.00','2020-10-20');
INSERT INTO `mealplan`.`Meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES(3,'roti','bread made with wheat flour','soborg copenhagen','2020-11-05 19:30:30',6,'50.00','2020-10-18');
INSERT INTO `mealplan`.`Meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES(4,'pizza','typical italian','bagsvaerd copenhagen','2020-10-30 14:20:45',4,'60.00','2020-10-11');
INSERT INTO `mealplan`.`Meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES(5,'pasta withm eatballs','pasta cooked with meat','bagsvaerd copenhagen','2020-11-02 22:30:00',10,'50.00','2020-10-16');
-----------------------------------------------------------------------------
INSERT INTO `mealplan`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES(1,2,4,'2020-10-21','91237645','abhi','abhi.12@mail.com'),
(2,4,1,'2020-10-22','67453241','manu','manu1811@gmail.com'),
(3,3,5,'2020-10-20','94526613','siya','ssiya@ymail.com'),
(4,6,2,'2020-10-22','4878489','bittu','rbituu@mail.com');

-- select * from mealplan.reservation;
-------------------------------------------------------------------------
INSERT INTO `mealplan`.`review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) 
VALUES(1,'best italian place','best tast with great location where we can enjoy our food','4','4.5','2020-10-01'),
(2,'place for indian food lovers','loved every bite of the food.taste delicious','2','4.0','2020-09-30'),
(3,'differnt type of rice','can satisfy you taste buds','1','3.5','2020-10-10'),
(4,'pasta lovers','not bad avgerage food','5','3.0','2020-10-21'),
(5,'yummy','enjoyed every bite best in the city','3','4.8','2020-10-11');
-- select * from mealplan.review;
------------------------------------------------------------------------------------------------
-- Add a new meal
INSERT INTO `mealplan`.`Meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES(6,'Rød grød med fløde','Rød grød','norrebro copenhagen','2020-11-15 09:00:01',2,'50.00','2020-10-10');
-- Get a meal with any id, fx 1
SELECT * FROM meal where (`id` = 4);
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `meal`
SET `title` = 'Different Indian breads' 
WHERE (`id` = '3');
-- Delete a meal with any id, fx 1
DELETE FROM `meal` 
WHERE (`id` = '4');
-- Get all meals
select * from mealplan.meal;

------------------------------------------------------------------------------------------------
INSERT INTO `mealplan`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES ('5', '2', '1', '2020-10-21', '78327947', 'sam', 'sam.amantha@gmail.com');
SELECT * FROM reservation where (`id` = 2);
UPDATE `reservation`
SET `number_of_guests` = '3' 
WHERE (`id` = '1');
DELETE FROM `reservation`
WHERE (`id` = '3');
SELECT * FROM reservation;
---------------------------------------------------------------------------------
-- INSERT INTO `mealplan`.`review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) 
-- VALUES(6,'average food','place to fill stomach but not to enjoy the food','4','3','2020-10-10');
SELECT * FROM review where (`id` = 2);
UPDATE `review`
SET `title` = 'delicious' 
WHERE (`id` = '5');
DELETE FROM `review`
WHERE (`id` = '2');
SELECT * FROM review;
---------------------------------------------------------------------------------------------------------------
-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal 
WHERE (price < 70);
-- Get meals that still has available reservations
SELECT *, reservation.number_of_guests 
FROM meal
join reservation on meal.id = reservation.meal_id
where max_reservations > number_of_guests; 
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal 
WHERE (title like '%Rød grød med%');
-- Get meals that has been created between two dates
SELECT * FROM meal 
WHERE (created_date BETWEEN '2020-10-20' AND '2020-10-22');
-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal 
LIMIT  5;
-- Get the meals that have good reviews
SELECT *,Review.stars FROM meal
JOIN Review ON Review.meal_id = meal.id
WHERE stars > 4;
-- Get reservations for a specific meal sorted by created_date
SELECT meal.title, reservation.created_date
FROM meal
JOIN reservation on reservation.meal_id = meal.id
WHERE reservation.meal_id = 1
ORDER BY reservation.created_date DESC;
-- Sort all meals by average number of stars in the reviews
SELECT meal.title,Review.stars FROM meal
join Review ON Review.meal_id = meal.id
ORDER BY review.stars DESC;






