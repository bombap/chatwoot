import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Messages extends BaseSchema {
  protected tableName = 'messages';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('content')
      table.integer('account_id')
      table.integer('inbox_id')
      table.integer('conversation_id')
      table.integer('message_type')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.boolean('private')
      table.integer('status')
      table.string('source_id')
      table.integer('content_type')
      table.string('content_attributes')
      table.string('sender_type')
      table.bigInteger('sender_id')
      table.jsonb('external_source_ids')
      table.jsonb('additional_attributes')
      table.text('processed_message_content')
      table.jsonb('sentiment')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
