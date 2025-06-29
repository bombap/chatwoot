import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelFacebookPages extends BaseModel {
  public static table = 'channel_facebook_pages';

  @column({ isPrimary: true })
  public id: number
}
