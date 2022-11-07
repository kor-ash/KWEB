select users.id, users.name, count(*) as cnt
sum(trains.distance) / 10 as d from tickets join trains on trains.id = tickets.train
join users on users.id = tickets.user
group by users.id
order by d desc
limit 6;