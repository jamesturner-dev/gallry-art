migrate((db) => {
  const collection = new Collection({
    "id": "sux0lhfrga8icx8",
    "created": "2023-01-01 15:30:11.248Z",
    "updated": "2023-01-01 15:30:11.248Z",
    "name": "imgs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zu4lbzah",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 3,
          "max": 256,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sux0lhfrga8icx8");

  return dao.deleteCollection(collection);
})
