DROP DATABASE IF EXISTS  class15;
CREATE DATABASE class15;
use class15;
DROP TABLE IF EXISTS  `class`;
CREATE TABLE `class`(
 `id`int(10) NOT NULL AUTO_INCREMENT, 
 `name`varchar(255), 
 `begins_date` DATETIME NOT NULL,
 `ends_date` DATETIME NOT NULL,
 primary key(`id`)
 );
 DROP TABLE IF EXISTS student;
CREATE TABLE `student`(
 `student_id`int(10)  NOT NULL , 
 `name`varchar(255), 
 `email` char(255) NOT NULL,
 `phone` int(10) NOT NULL,
 `class_id`int NOT NULL,
 PRIMARY KEY(`student_id`),
 FOREIGN KEY student(`class_id`) REFERENCES class(`id`)
 );
 CREATE INDEX student_name ON student (name);
 SHOW INDEXES FROM student;
 ALTER TABLE class
ADD status set('not-started', 'ongoing', 'finished');
