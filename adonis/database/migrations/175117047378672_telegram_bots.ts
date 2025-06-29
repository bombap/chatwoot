import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TelegramBots extends BaseSchema {
  protected tableName = 'telegram_bots';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('auth_key')
      table.integer('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
