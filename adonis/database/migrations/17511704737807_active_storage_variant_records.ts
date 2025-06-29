import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActiveStorageVariantRecords extends BaseSchema {
  protected tableName = 'active_storage_variant_records';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('blob_id')
      table.string('variation_digest')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
