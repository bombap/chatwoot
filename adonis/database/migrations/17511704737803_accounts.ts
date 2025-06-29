import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accounts extends BaseSchema {
  protected tableName = 'accounts';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('locale')
      table.string('domain')
      table.string('support_email')
      table.bigInteger('feature_flags')
      table.integer('auto_resolve_duration')
      table.jsonb('limits')
      table.jsonb('custom_attributes')
      table.integer('status')
      table.jsonb('internal_attributes')
      table.jsonb('settings')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
