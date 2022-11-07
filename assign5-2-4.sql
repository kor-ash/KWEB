select types.name as type, src.name as s,
dst.name as d1, trains.departure, trains.arrival,
round(types.fare_rate * trains.distance / 1000, -2) as fare
from trains join types on types.id = trains.type
join stations as s1 on s1.id = trains.source
join stations as s2 ON s2.id = trains.destination
order by departure;