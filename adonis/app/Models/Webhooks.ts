import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Webhooks extends BaseModel {
  public static table = 'webhooks';

  @column({ isPrimary: true })
  public id: number
}
