migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sux0lhfrga8icx8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ablrysss",
    "name": "blurb",
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
  const collection = dao.findCollectionByNameOrId("sux0lhfrga8icx8")

  // remove
  collection.schema.removeField("ablrysss")

  return dao.saveCollection(collection)
})
