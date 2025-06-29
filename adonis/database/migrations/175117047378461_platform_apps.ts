import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PlatformApps extends BaseSchema {
  protected tableName = 'platform_apps';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
