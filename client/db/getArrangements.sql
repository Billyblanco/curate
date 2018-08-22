SELECT *
FROM arrangements a 
JOIN arrangements_flowers af
ON a .id = af.arrangement_id
WHERE user_id = $1;

