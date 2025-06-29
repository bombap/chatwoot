import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Conversations extends BaseSchema {
  protected tableName = 'conversations';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.integer('inbox_id')
      table.integer('status')
      table.integer('assignee_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.bigInteger('contact_id')
      table.integer('display_id')
      table.timestamp('contact_last_seen_at')
      table.timestamp('agent_last_seen_at')
      table.jsonb('additional_attributes')
      table.bigInteger('contact_inbox_id')
      table.string('uuid')
      table.string('identifier')
      table.timestamp('last_activity_at')
      table.bigInteger('team_id')
      table.bigInteger('campaign_id')
      table.timestamp('snoozed_until')
      table.jsonb('custom_attributes')
      table.timestamp('assignee_last_seen_at')
      table.timestamp('first_reply_created_at')
      table.integer('priority')
      table.bigInteger('sla_policy_id')
      table.timestamp('waiting_since')
      table.text('cached_label_list')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
