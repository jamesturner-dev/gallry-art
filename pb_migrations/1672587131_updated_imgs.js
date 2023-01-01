migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sux0lhfrga8icx8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axbome4q",
    "name": "url",
    "type": "url",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t4qkre4a",
    "name": "gallry",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "5okmp4q8wap2qhh",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sux0lhfrga8icx8")

  // remove
  collection.schema.removeField("axbome4q")

  // remove
  collection.schema.removeField("t4qkre4a")

  return dao.saveCollection(collection)
})
