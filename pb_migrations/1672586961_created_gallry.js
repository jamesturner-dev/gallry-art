migrate((db) => {
  const collection = new Collection({
    "id": "5okmp4q8wap2qhh",
    "created": "2023-01-01 15:29:21.445Z",
    "updated": "2023-01-01 15:29:21.445Z",
    "name": "gallry",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aobhbn4c",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 256,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tepnrv2r",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "jahjnhqd",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
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
  const collection = dao.findCollectionByNameOrId("5okmp4q8wap2qhh");

  return dao.deleteCollection(collection);
})
