DELETE FROM 
arrangements_flowers 
WHERE arrangement_id = $1;
DELETE FROM 
arrangements 
WHERE id = $1;
