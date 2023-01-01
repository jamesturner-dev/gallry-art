migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5okmp4q8wap2qhh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7suekhq2",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 256,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5okmp4q8wap2qhh")

  // remove
  collection.schema.removeField("7suekhq2")

  return dao.saveCollection(collection)
})
