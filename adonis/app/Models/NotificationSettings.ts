import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NotificationSettings extends BaseModel {
  public static table = 'notification_settings';

  @column({ isPrimary: true })
  public id: number
}
