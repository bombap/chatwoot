import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ActiveStorageBlobs extends BaseModel {
  public static table = 'active_storage_blobs';

  @column({ isPrimary: true })
  public id: number
}
