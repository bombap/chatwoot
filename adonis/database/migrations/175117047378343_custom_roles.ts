import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CustomRoles extends BaseSchema {
  protected tableName = 'custom_roles';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('description')
      table.bigInteger('account_id')
      table.text('permissions')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
