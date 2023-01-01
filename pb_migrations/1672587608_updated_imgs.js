migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sux0lhfrga8icx8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykusbzbu",
    "name": "rating",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sux0lhfrga8icx8")

  // remove
  collection.schema.removeField("ykusbzbu")

  return dao.saveCollection(collection)
})
