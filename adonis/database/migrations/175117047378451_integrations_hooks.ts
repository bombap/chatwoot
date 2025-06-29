import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class IntegrationsHooks extends BaseSchema {
  protected tableName = 'integrations_hooks';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('status')
      table.integer('inbox_id')
      table.integer('account_id')
      table.string('app_id')
      table.integer('hook_type')
      table.string('reference_id')
      table.string('access_token')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.jsonb('settings')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
