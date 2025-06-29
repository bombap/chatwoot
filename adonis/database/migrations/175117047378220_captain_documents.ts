import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CaptainDocuments extends BaseSchema {
  protected tableName = 'captain_documents';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('external_link')
      table.text('content')
      table.bigInteger('assistant_id')
      table.bigInteger('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('status')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
