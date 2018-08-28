DELETE FROM
arrangements_flowers
WHERE arrangement_id IN ( SELECT id FROM arrangements WHERE user_id = $1 );
DELETE FROM arrangements 
WHERE user_id = $1;