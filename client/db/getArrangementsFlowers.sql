SELECT *
FROM arrangements a 
JOIN arrangements_flowers af
ON a .id = af.arrangement_id;