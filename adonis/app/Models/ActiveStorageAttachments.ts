import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ActiveStorageAttachments extends BaseModel {
  public static table = 'active_storage_attachments';

  @column({ isPrimary: true })
  public id: number
}
