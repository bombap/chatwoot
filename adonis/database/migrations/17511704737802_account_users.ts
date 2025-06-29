import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AccountUsers extends BaseSchema {
  protected tableName = 'account_users';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('account_id')
      table.bigInteger('user_id')
      table.integer('role')
      table.bigInteger('inviter_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.timestamp('active_at')
      table.integer('availability')
      table.boolean('auto_offline')
      table.bigInteger('custom_role_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
