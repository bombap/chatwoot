import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActiveStorageAttachments extends BaseSchema {
  protected tableName = 'active_storage_attachments';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('record_type')
      table.bigInteger('record_id')
      table.bigInteger('blob_id')
      table.timestamp('created_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
