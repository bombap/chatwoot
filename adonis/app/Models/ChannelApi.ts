import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelApi extends BaseModel {
  public static table = 'channel_api';

  @column({ isPrimary: true })
  public id: number
}
