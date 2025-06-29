import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DashboardApps extends BaseSchema {
  protected tableName = 'dashboard_apps';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.jsonb('content')
      table.bigInteger('account_id')
      table.bigInteger('user_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
