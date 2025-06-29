import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Audits extends BaseSchema {
  protected tableName = 'audits';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('auditable_id')
      table.string('auditable_type')
      table.bigInteger('associated_id')
      table.string('associated_type')
      table.bigInteger('user_id')
      table.string('user_type')
      table.string('username')
      table.string('action')
      table.jsonb('audited_changes')
      table.integer('version')
      table.string('comment')
      table.string('remote_address')
      table.string('request_uuid')
      table.timestamp('created_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
