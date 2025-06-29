import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CaptainDocuments extends BaseModel {
  public static table = 'captain_documents';

  @column({ isPrimary: true })
  public id: number
}
