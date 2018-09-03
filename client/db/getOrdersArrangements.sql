SELECT o.id, f.name as flower_name, f.image_url as flower_image, v.name as vase_name, v.image_url as vase_image
FROM orders o
JOIN orders_arrangements oa ON o.id = oa.order_id
JOIN flowers f ON oa.flower_id = f.id
JOIN vases v ON o.vase_id = v.id;