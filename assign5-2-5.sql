select trains.id, types.name as t,src.name as s, dst.name as d,
count(*) as cur, types.max_seats as lim 
from tickets join trains on trains.id = tickets.train
join types on types.id = trains.type
join stations as s1 on s1.id = trains.source
join stations as s2 on s2.id = trains.destination
group by tickets.train
order by trains.id;
