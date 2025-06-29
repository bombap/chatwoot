import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ConversationParticipants extends BaseSchema {
  protected tableName = 'conversation_participants';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('account_id')
      table.bigInteger('user_id')
      table.bigInteger('conversation_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
