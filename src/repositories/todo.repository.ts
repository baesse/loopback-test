import {DefaultCrudRepository,Filter} from '@loopback/repository';
import {Todo, TodoRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Todo, dataSource);
  }
  requestByName(filter?: any):Promise<Todo | null>{
    return this.findOne({where:{title:filter.filter}})
  }

}
