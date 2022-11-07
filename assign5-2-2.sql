select users.id, users.name, count(*) as trains_count
sum(trains.distance) / 10 as total_distance from tickets join trains on trains.id = tickets.train
join users on users.id = tickets.user
group by users.id
order by d desc
limit 6;