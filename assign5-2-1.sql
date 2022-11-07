select users.id, users.name, tickets.seat_number from tickets
join users on tickets.train = 11 and users.id = tickets.user
order by tickets.seat_number;