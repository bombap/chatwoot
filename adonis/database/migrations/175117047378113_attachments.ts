import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Attachments extends BaseSchema {
  protected tableName = 'attachments';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('file_type')
      table.string('external_url')
      table.float('coordinates_lat')
      table.float('coordinates_long')
      table.integer('message_id')
      table.integer('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('fallback_title')
      table.string('extension')
      table.jsonb('meta')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
