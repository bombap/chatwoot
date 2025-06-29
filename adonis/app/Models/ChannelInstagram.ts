import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelInstagram extends BaseModel {
  public static table = 'channel_instagram';

  @column({ isPrimary: true })
  public id: number
}
