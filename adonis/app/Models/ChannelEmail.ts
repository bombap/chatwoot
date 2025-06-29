import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelEmail extends BaseModel {
  public static table = 'channel_email';

  @column({ isPrimary: true })
  public id: number
}
