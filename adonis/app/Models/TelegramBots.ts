import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TelegramBots extends BaseModel {
  public static table = 'telegram_bots';

  @column({ isPrimary: true })
  public id: number
}
