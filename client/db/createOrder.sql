INSERT INTO orders (vase_id)
SELECT vase_id FROM arrangements WHERE user_id = $1;
UPDATE orders 
SET user_id = $1
WHERE user_id is null;

SELECT * FROM orders
WHERE user_id = $1;