SELECT a.id, f.name as flower_name, f.price as flower_price, f.image_url as flower_image, v.name as vase_name, v.price as vase_price, v.image_url as vase_image
FROM arrangements a 
JOIN arrangements_flowers af ON a .id = af.arrangement_id
JOIN flowers f ON af.flower_id = f.id
JOIN vases v ON a.vase_id = v.id;


-- select *
-- from arrangements
-- join arrangements_flowers on arrangement.id = arrangements_flowers.arrangement_id
-- join flowers on arrangements_flowers.flower_id = flowers.id
-- join vases on arrangement.vases_id = vases_id