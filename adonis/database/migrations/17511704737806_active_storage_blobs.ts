import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActiveStorageBlobs extends BaseSchema {
  protected tableName = 'active_storage_blobs';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('key')
      table.string('filename')
      table.string('content_type')
      table.text('metadata')
      table.bigInteger('byte_size')
      table.string('checksum')
      table.timestamp('created_at')
      table.string('service_name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
