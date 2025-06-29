import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ActiveStorageVariantRecords extends BaseModel {
  public static table = 'active_storage_variant_records';

  @column({ isPrimary: true })
  public id: number
}
