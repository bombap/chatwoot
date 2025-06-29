import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PlatformAppPermissibles extends BaseSchema {
  protected tableName = 'platform_app_permissibles';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('platform_app_id')
      table.string('permissible_type')
      table.bigInteger('permissible_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
