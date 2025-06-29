import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ArticleEmbeddings extends BaseModel {
  public static table = 'article_embeddings';

  @column({ isPrimary: true })
  public id: number
}
