import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CsatSurveyResponses extends BaseSchema {
  protected tableName = 'csat_survey_responses';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('account_id')
      table.bigInteger('conversation_id')
      table.bigInteger('message_id')
      table.integer('rating')
      table.text('feedback_message')
      table.bigInteger('contact_id')
      table.bigInteger('assigned_agent_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
