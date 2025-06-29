import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NotificationSubscriptions extends BaseModel {
  public static table = 'notification_subscriptions';

  @column({ isPrimary: true })
  public id: number
}
