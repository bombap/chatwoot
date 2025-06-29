import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelTelegram extends BaseModel {
  public static table = 'channel_telegram';

  @column({ isPrimary: true })
  public id: number
}
