import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AppliedSlas extends BaseSchema {
  protected tableName = 'applied_slas';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('account_id')
      table.bigInteger('sla_policy_id')
      table.bigInteger('conversation_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('sla_status')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
