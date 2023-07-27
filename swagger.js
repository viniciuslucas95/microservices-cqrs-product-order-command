/**
 * @swagger
 * tags:
 *   name: ProductOrder
 *   description: API for managing product orders
 */

/**
 * @swagger
 * /product-order:
 *   post:
 *     summary: Order a product
 *     tags: [ProductOrder]
 *     requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: string
 *                   format: uuid
 *                 userId:
 *                   type: string
 *                   format: uuid
 *                 date:
 *                   type: string
 *                   format: date
 *             example:
 *               productId: cda5f321-86c5-4e8e-9be5-6c938ca0798c
 *               userId: 1ffad6d6-2add-4f87-85f7-df59a5d799ea
 *               date: 2023-07-27T14:35:77
 *     responses:
 *       201:
 *         description: Product ordered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orderId:
 *                   type: string
 *                   format: uuid
 *             example:
 *                 orderId: 6ba7b810-9dad-11d1-80b4-00c04fd430c8
 */
