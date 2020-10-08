-- SHOW tables;
SELECT * FROM task;
-- Find out how many tasks are in the task table
SELECT COUNT(id) FROM task;
-- Find out how many tasks in the task table do not have a valid due date
SELECT count(id) FROM task where due_date is NULL;
-- Find all the tasks that are marked as done
select * from task where status_id = 3;
-- Find all the tasks that are not marked as done 
select * from task where status_id != 3;
-- Get all the tasks, sorted with the most recently created first
select * from task ORDER BY created DESC;
-- Get the single most recently created task
select * from task ORDER BY created DESC LIMIT 1;
-- Get the title and due date of all tasks where the title or description contains database
select title, due_date from task where title like '%database%' or description like '%database%';
-- Get the title and status (as text) of all tasks
select  task.title, status.name from status inner join task on status.id=task.status_id;
-- Get the name of each status, along with a count of how many tasks have that status
select count(task.id), name from  status join task on status.id=task.status_id group by status.name;
-- Get the names of all statuses, sorted by the status with most tasks first
select count(task.id) AS count, name from  status join task on status.id=task.status_id group by status.name order by count desc;







